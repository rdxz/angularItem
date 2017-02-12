angular.module('StarkApp').directive('appHead',[function(){
    return {
        restrict: 'A',
        replace: true,
        templateUrl:'view/common/head.html'
    }
}])
