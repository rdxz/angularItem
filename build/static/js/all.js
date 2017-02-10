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



app.config(
    ['$routeProvider',
        function($routeProvider) {
            $routeProvider
                //活动标签添加
                .when('/activity', {
                    templateUrl: '/view/activity/index.html',
                    controller: 'ActivityCtrl'
                })       
                //新统计数据页面
                .when('/data/view', {
                    templateUrl: '/partial/data/view.html',
                    controller: 'ActivityCtrl'
                })
       }
 ]);
angular.module('controllers', ['ngTagsInput'])
    .controller('ActivityCtrl', [
        '$scope',
        '$route',
        '$routeParams',
        '$location',
        '$mdDialog',
        'lodash',
        '$log',
        function(
            $scope,
            $route,
            $routeParams,
            $location,
            $mdDialog,
            lodash,
            $mdToast,
            $log
        ) {

    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newState = newState;

    function newState(state) {
      alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }

  }
])
