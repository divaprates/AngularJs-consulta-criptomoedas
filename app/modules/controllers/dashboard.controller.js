app.controller('DashboardController', DashboardController);

function DashboardController($scope, apiService) {
    var vm = $scope;
    vm.oi = 'olá';
    vm.coins = [];
    vm.pagina = 1;
    vm.numMoedas = 20;

    vm.init = () => {
        vm.carregarDados();
    }
    
    vm.carregarDados = () => {
        apiService
            .getData(vm.numMoedas, vm.pagina)
            .then(result => {
                
                if(result.data) {
                    vm.coins = [...vm.coins, ...result.data];
                    vm.pagina++;
                    apiService.setCoinsStorage(vm.coins);
                }
                
            });
    }

    vm.loadMore = () => {
        vm.carregarDados();
    }

    vm.init();
}