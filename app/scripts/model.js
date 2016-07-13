app.service('translationService', function ($resource) {

    this.getTranslation = function ($scope, language) {
        var languageFilePath = 'lang_json/translation_' + language + '.json';
        console.log(languageFilePath);
        $resource(languageFilePath).get(function (data) {
            $scope.translation = data;
        });
    };
});

app.service('saveLocalData', function ($resource) {

    this.saveTodoList = function ($scope) {
        var saveList = JSON.stringify($scope.todoList);
        localStorage.setItem('todoListLoc', saveList);
    };
    this.saveFilter = function ($scope) {
        var saveFilter = JSON.stringify($scope.filter);
        localStorage.setItem('filter', saveFilter);
    };
});
