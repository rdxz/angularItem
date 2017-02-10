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