import angular from 'angular';

import 'angular-material';
import uiRouter from 'angular-ui-router';
import { routerConfig } from './app.router';
import './scripts/home/home.module';
 angular.module('myApp', [uiRouter, 'ngMaterial', 'app.home'])
   .config(routerConfig)
;
