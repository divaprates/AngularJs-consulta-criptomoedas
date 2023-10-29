app.controller('DashboardController', DashboardController);

function DashboardController($scope, apiService) {
    var vm = $scope;
    vm.oi = 'olá';

    console.log('res: ', apiService.getData());
}