import angular from 'angular';
import 'angular-material';
import uiRouter from 'angular-ui-router';

import TranslationService from './scripts/services/Translation.service';
import LocalDataService from './scripts/services/LocalData.service';
import './scripts/home/home.module';

import {routerConfig} from './app.router';

angular.module('myApp', [uiRouter, 'ngMaterial', 'app.home'])
.service('TranslationService', TranslationService)
.service('LocalDataService', LocalDataService)
.config(routerConfig)
;
