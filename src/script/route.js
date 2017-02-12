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
                .when('/dashboard', {
                    templateUrl: '/view/dashboard.html',
                    controller: 'DashboardCtrl'
                })
                //新统计数据页面
                .when('/member', {
                    templateUrl: '/view/member/index.html',
                    controller: 'MemberCtrl'
                })
       }
 ]);
