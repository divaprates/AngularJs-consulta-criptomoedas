app.controller('DetailController', DetailController);

    function DetailController($scope, apiService, $stateParams) {
        var vm = $scope;
        vm.coin = {};

        vm.init = () => {
            const coins = apiService.getCoinsStorage() || [];
            if($stateParams?.name) {
                vm.coin = coins.find(coin => coin.name === $stateParams.name);
            }
        }

        vm.init();
    }