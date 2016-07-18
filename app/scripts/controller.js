export default class TodoController {
  construct($scope, translationService, saveLocalData) {
    this.$scope = $scope;
    this.translationService = translationService;
    this.saveLocalData = saveLocalData;
    this.init();
  }
  my() {
    console.log("My");
  }

  init() {
    console.log("working");
    this.$scope.todoList = JSON.parse(localStorage.getItem('todoListLoc')) || [];
    this.$scope.filter = JSON.parse(localStorage.getItem('filter')) || 'All';
    this.$scope.langs = ['en', 'ru'];
    this.$scope.lang = 'en';
  }

  todoAdd() {
    if (this.$scope.todoInput) {
        this.$scope.todoList.push({todoText: this.$scope.todoInput, done: false});
        this.$scope.todoInput = '';
    }
    this.$scope.saveTodoList();
  }
}

  deleted(x) {
    this.$scope.todoList.splice(x, 1);
};
  allCheck() {
    var a = 0;
    angular.forEach(this.$scope.todoList, function (x) {
        if (!x.done) {
            x.done = true;
            a++
        }
    });
    if (a == 0) {
        angular.forEach(this.$scope.todoList, function (x) {
            if (x.done) x.done = false;
        });
    }
};

removeAll() {
    let oldList = this.$scope.todoList;
    this.$scope.todoList = [];
    angular.forEach(oldList, function (x) {
        if (!x.done) this.$scope.todoList.push(x);
    });
};

saveTodoList () {
    this.saveLocalData.saveTodoList(this.$scope);
};

saveFilter() {
    this.saveLocalData.saveFilter(this.$scope);
};
listItem() {
    return function (items) {
        if (this.$scope.filter == 'All') {
            return true;
        } else if (this.$scope.filter == 'Completed') {
            if (items.done) {
                return items;
            }
        } else {
            if (!items.done) {
                return items;
            }
        }
    };
};

translate() {
    this.translationService.getTranslation(this.$scope, this.$scope.lang);
};
this.$scope.$watch('lang', function () {
    this.$scope.translate();
});
this.$scope.$watch('filter', function () {
    this.$scope.saveFilter();
});
