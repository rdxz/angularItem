var app = angular.module('StarkApp', [
  'ui.bootstrap.datetimepicker',
  'ngMaterial',
  'ngMessages',
  'ngRoute',
  'ngLodash',
  'ngFileUpload',
  'controllers',
  'ui.bootstrap',
  'Services',
  'textAngular',
  'ngTable',
]);

// // // init submodule
angular.module('controllers', []);




// var app = angular.module("StarkApp", []);





// var app = angular.module("myApp", []);


angular.module('Services', []);

angular.module('controllers')
  .controller('UserRoleCtrl', ['$scope', '$rootScope','$mdSidenav', '$location','$userManage', function($scope, $rootScope, $mdSidenav, $location, $userManage) {
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    $userManage.fetchUserRole().then(function(data){
      console.log(data);
      $rootScope.userRole = data;
      console.log($rootScope);
    });

    $scope.isActive = function(route) {
      return $location.path().indexOf(route) != -1;
    };
  }]);

// app.config(["$httpProvider", function($httpProvider) {
//   $httpProvider.defaults.headers.post['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
// }]);

// // 根据时间的字符串获得时间戳
// function getTimestamp(str) {
//   return (new Date(str)).getTime() / 1000;
// }
// // 根据时间戳获取时间的字符串
// function getTimeByTimestamp(timestamp) {
//   return new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
// }

// angular.module('controllers')
//   .controller('UserRoleCtrl', ['$scope', '$rootScope','$mdSidenav', '$location','$userManage', function($scope, $rootScope, $mdSidenav, $location, $userManage) {

//     console.log(111);
//   //   $scope.toggleSidenav = function(menuId) {
//   //     $mdSidenav(menuId).toggle();
//   //   };

//   //   $userManage.fetchUserRole().then(function(data){
//   //     console.log(data);
//   //     $rootScope.userRole = data;
//   //     console.log($rootScope);
//   //   });

//   //   $scope.isActive = function(route) {
//   //     return $location.path().indexOf(route) != -1;
//   //   };
//   }]);
