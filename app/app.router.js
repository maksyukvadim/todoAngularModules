export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../app/scripts/home/home.view.html',
      controller: 'TodoController',
      controllerAs: 'vm',
    });
  $urlRouterProvider.otherwise('/home');
}
