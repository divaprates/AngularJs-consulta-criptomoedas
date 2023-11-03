app.controller('DashboardController', DashboardController);

function DashboardController($scope, apiService) {
    var vm = $scope;
    vm.coins = [];
    vm.bufferCoins = [];
    vm.pagina = 1;
    vm.numMoedas = 20;
    vm.propertyOrder = '';

    vm.init = () => {
        vm.carregarDados();
    }
    
    vm.carregarDados = () => {
        apiService
            .getData(vm.numMoedas, vm.pagina)
            .then(result => {
                
                if(result.data) {
                    vm.coins = vm.bufferCoins = [...vm.coins, ...result.data];
                    vm.pagina++;
                    apiService.setCoinsStorage(vm.coins);
                }
                
            });
    }

    vm.loadMore = () => {
        vm.carregarDados();
    }

    vm.applyFilter = (search) => {
        if(search && vm.bufferCoins) {
            vm.bufferCoins = vm.coins.filter((item) => item.name.toUpperCase().includes(search.toUpperCase()));
        }

        if(search === '') {
            vm.bufferCoins = vm.coins;
        }
    }

    vm.orderBy = function(order) {
        vm.propertyOrder = order;
    }

    vm.init();
}