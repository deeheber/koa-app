configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        main: {
          component: 'dogs'
        }
      }
    });

  $urlRouterProvider.otherwise( '/' );
}