import 'angular-resource';
import TodoController from './TodoController';
import TranslationService from '../Translation.service';
import LocalDataService from '../LocalData.service';
angular.module('app.home', ['ngResource'])
    .controller('TodoController', TodoController,  ['TranslationService', 'LocalDataService'])
    .service('TranslationService', TranslationService)
    .service('LocalDataService', LocalDataService)
;
