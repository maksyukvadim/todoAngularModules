export default class TranslationService {
  constructor($resource) {
    this.$resource = $resource;
  }

  getTranslation($scope, language) {
    var languageFilePath = 'lang_json/translation_' + language + '.json';
    console.log(languageFilePath);
    this.$resource(languageFilePath).get(function(data) {
      $scope.translation = data;
    });
  }
}
