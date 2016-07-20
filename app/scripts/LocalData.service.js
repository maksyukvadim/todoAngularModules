export default class LocalDataService {
  setTodoList($scope) {
    var setList = JSON.stringify($scope.todoList);
    localStorage.setItem('todoListLoc', setList);
  }

  setFilter($scope) {
    var setFilter = JSON.stringify($scope.filter);
    localStorage.setItem('filter', setFilter);
  }
  setLang($scope) {
    var setLang = JSON.stringify($scope.lang);
    localStorage.setItem('langSite', setLang);
  }

  getTodoList() {
    return JSON.parse(localStorage.getItem('todoListLoc')) || [];
  }

  getFilter() {
    return JSON.parse(localStorage.getItem('filter')) || "All";
  }

  getLang() {
    return JSON.parse(localStorage.getItem('langSite')) || "en";
  }
  
}
