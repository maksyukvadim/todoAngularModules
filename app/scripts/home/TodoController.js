
export default class TodoController {
  constructor($scope, TranslationService, LocalDataService) {
    this.$scope = $scope;
    this.translationService = TranslationService;
    this.saveLocalData = LocalDataService;
    this.init();
    self = this;
  }


  init() {
    this.$scope.todoList = JSON.parse(localStorage.getItem('todoListLoc')) || [];
    this.$scope.filter = JSON.parse(localStorage.getItem('filter')) || 'All';
    this.$scope.langs = ['en', 'ru'];
    this.$scope.lang = 'en';
    this.watchForLang();
    this.watchForFilter();

  }

  todoAdd() {
    if (this.$scope.todoInput) {
        this.$scope.todoList.push({todoText: this.$scope.todoInput, done: false});
        this.$scope.todoInput = '';
    }
  self.saveTodoList();
  }


  deleted(x) {
    console.log(x);
    this.$scope.todoList.splice(x, 1);


};
  allCheck() {

    var a = 0;
    angular.forEach(this.$scope.todoList, function (x) {
console.log(x.todoText);
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

    var oldList = this.$scope.todoList;
    console.log('oldList');
    this.$scope.todoList = [];
    angular.forEach(oldList, function (x) {
      console.log(!x.done);
        if (!x.done){
          this.$scope.todoList.push(x);
        }
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
      console.log('listItem');
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
watchForLang() {
  this.$scope.$watch('lang', function () {
      self.translate();
  });
};
watchForFilter() {
  this.$scope.$watch('filter', function () {
      self.saveFilter();
  });
};
}
