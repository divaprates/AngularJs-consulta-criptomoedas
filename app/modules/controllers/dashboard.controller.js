app.controller('DashboardController', DashboardController);

function DashboardController($scope, apiService) {
    var vm = $scope;
    vm.oi = 'olá';

    apiService
        .getData()
        .then(result => {
            
            if(result.data) {
                vm.coins = result.data;
            }
            
        });
}