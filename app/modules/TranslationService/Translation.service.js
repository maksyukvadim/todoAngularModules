export default class TranslationService {

  constructor($resource) {
    this.$resource = $resource;
  }

  getTranslation($scope, language) {
    var languageFilePath = 'lang_json/translation_' + language + '.json';
    this.$resource(languageFilePath).get(function(data) {
      $scope.translation = data;
    });
  }

  getAllLang() {
    var allLang = ['en', 'ru'];
    return allLang;
  }
  
}
