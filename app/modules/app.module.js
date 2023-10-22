var app = angular
    .module('app', [])
    .controller('HelloWorld', ['$scope', ($scope) => {
        $scope.helloworld = 'Hello, world!';

        $scope.items = [
            {id: 1, name: 'Lua'},
            {id: 2, name: 'Sol'}
        ];

        var contId = 2;

        $scope.addName = (name) => {
            contId++;
            $scope.items.push({id: contId,name: name});
            $scope.name = '';
        }

    }])
