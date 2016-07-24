export default class LocalDataService {

  set todoListLocal($scope) {
      var setList = JSON.stringify($scope.todoList);
      localStorage.setItem('todoListLoc', setList);
  }

  get todoListLocal() {
      return JSON.parse(localStorage.getItem('todoListLoc')) || [];
  }

  set filter($scope) {
      var setFilter = JSON.stringify($scope.filter);
      localStorage.setItem('filter', setFilter);
  }

  get filter() {
      return JSON.parse(localStorage.getItem('filter')) || "All";
  }

  set lang($scope) {
      var setLang = JSON.stringify($scope.lang);
      localStorage.setItem('langSite', setLang);
  }
  
  get lang() {
      return JSON.parse(localStorage.getItem('langSite')) || "en";
  }

}
