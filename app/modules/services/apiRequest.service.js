app.factory('apiService', ['$http', function ($http) {
    var URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

    return {
        getData: function(per_page, page) {
            return $http({
                method: 'GET',
                url: URL,
                params: {
                    per_page,
                    page
                }
            })
        },

        setCoinsStorage: function(coins) {
            window.localStorage.setItem('coinsStorage', JSON.stringify(coins));
        },

        getCoinsStorage: function() {
            return JSON.parse(window.localStorage.getItem('coinsStorage'));
        }
    }
}])