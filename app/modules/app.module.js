var app = angular
    .module('app', ['ui.router'])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('/', {
                url:'/dashboard',
                templateUrl: './app/modules/templates/dashboard.html',
                controller: 'DashboardController',
                controlerAs: 'vm'
            })
            
            $urlRouterProvider.otherwise('/dashboard');
    });
