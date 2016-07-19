import angular from 'angular';
import 'angular-material';
import TranslationService from './scripts/Translation.service';
import LocalDataService from './scripts/LocalData.service';
import './scripts/home/home.module';

angular.module('myApp', ['ngMaterial', 'app.home'])
.service('TranslationService', TranslationService)
.service('LocalDataService', LocalDataService)

;
