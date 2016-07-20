import angular from 'angular';
import 'angular-material';
import uiRouter from 'angular-ui-router';

import './modules/home/home.module';
import './modules/LocalDataService/LocalDataModule'
import './modules/TranslationService/TranslationModule'

import {routerConfig} from './app.router';

angular.module('myApp', [uiRouter, 'ngMaterial', 'app.home', 'LocalDataModule', 'TranslationModule'])
.config(routerConfig)
;
