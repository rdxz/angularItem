angular.module('controllers').controller('MemberCtrl', [
        '$scope',
        '$route',
        '$routeParams',
        '$StarkManage',
        function(
            $scope,
            $route,
            $routeParams,
            $StarkManage
        ) {
            $StarkManage.fetchStarkInfo().then(function(data) {
                // console.log(data.data.stark);
                $scope.stark = data.data.stark;
                // $scope.name = data.data.stark.name;
                // console.log($scope.name);
            });
          console.log('member');
      }
 ])
