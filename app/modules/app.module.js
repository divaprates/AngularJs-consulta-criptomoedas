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
            .state('dashboard', {
                templateUrl: './app/modules/templates/dashboard.html',
                controller: 'DashboardController',
                controlerAs: 'vm'
            })
            .state('detail', {
                url:'/detail/:name',
                templateUrl: './app/modules/templates/detail.html',
                controller: 'DetailController',
                controlerAs: 'vm'
            })
            
            $urlRouterProvider.otherwise('/dashboard');
    });
