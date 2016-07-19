import 'angular-resource';

import TodoController from './TodoController';
import filterListItem from '../filters/filters';

angular.module('app.home', ['ngResource'])
    .controller('TodoController', TodoController,  ['TranslationService', 'LocalDataService'])
    .filter('filterListItem', filterListItem, ['LocalDataService'])
;
