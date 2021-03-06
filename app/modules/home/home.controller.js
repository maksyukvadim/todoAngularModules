export default class TodoController {

  constructor($scope, TranslationService, LocalDataService) {
    this.$scope = $scope;
    this.translationService = TranslationService;
    this.localData = LocalDataService;  
    this.init();
  }

  init() {
    this.$scope.todoList = this.localData.todoListLocal;
    this.$scope.filter = this.localData.filter;
    this.$scope.lang = this.localData.lang;
    this.$scope.langs = this.translationService.getAllLang();
    this.watchForLang();
    this.watchForFilter();
    this.watchForTodoList();
  }

  todoAdd() {
    if (this.$scope.todoInput) {
      this.$scope.todoList.push({
        todoText: this.$scope.todoInput,
        done: false
      });
      this.$scope.todoInput = '';
    }
    this.setTodoList();
  }

  deleted(x) {
    this.$scope.todoList.splice(x, 1);
    this.setTodoList();
  }

  allCheck() {
    var a = 0;
    angular.forEach(this.$scope.todoList, (x) => {
      if (!x.done) {
        x.done = true;
        a++;
      }
    });
    if (a == 0) {
      angular.forEach(this.$scope.todoList, (x) => {
        if (x.done) x.done = false;
      });
    }
  }

  removeAll() {
    var oldList = this.$scope.todoList;
    this.$scope.todoList = [];
    angular.forEach(oldList, (x) => {
      if (!x.done) {
        this.$scope.todoList.push(x);
      }
    });
  };

  setTodoList() {
    this.localData.todoListLocal = this.$scope;
  }

  setFilter() {
    this.localData.filter = this.$scope;
  }

  setLang() {
    this.localData.lang = this.$scope;
  }

  translate() {
    this.translationService.getTranslation(this.$scope, this.$scope.lang);
  }

  watchForTodoList() {
  this.$scope.$watch('todoList', () => {
      this.setTodoList();
  }, true);
  }

  watchForLang() {
    this.$scope.$watch('lang', () => {
      this.setLang();
      this.translate();
    });
  }

  watchForFilter() {
    this.$scope.$watch('filter', () => {
      this.setFilter();
    });
  }

}
