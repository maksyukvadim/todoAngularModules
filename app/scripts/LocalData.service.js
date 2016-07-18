export default class LocalDataService {
    saveTodoList($scope) {
        var saveList = JSON.stringify($scope.todoList);
        localStorage.setItem('todoListLoc', saveList);
    }

    saveFilter ($scope) {
        var saveFilter = JSON.stringify($scope.filter);
        localStorage.setItem('filter', saveFilter);
    }
}
