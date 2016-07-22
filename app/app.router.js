
export function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.view.html',
      controller: 'TodoController',
      controllerAs: 'vm',
    });
  $urlRouterProvider.otherwise('/home');
}
