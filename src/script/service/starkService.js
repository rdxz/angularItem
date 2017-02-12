angular.module('StarkApp')
    .factory('$StarkManage', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {
        return {
            //查看某个活动的日志
            fetchStarkInfo: function () {
                return $http.get('/data/stark.json').then(function(data){
                    return data;
                });
            }
        }
}]);
