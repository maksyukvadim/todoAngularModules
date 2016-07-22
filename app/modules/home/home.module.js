import 'angular-resource';

import TodoController from './home.controller';
import filterListItem from './todoItem.filter';

angular.module('app.home', ['ngResource'])
    .controller('TodoController', TodoController)
    .filter('filterListItem', filterListItem)
;
