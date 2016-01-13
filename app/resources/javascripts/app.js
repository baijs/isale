/**
 * Created by bjs on 2015/12/31.
 *
 * angular js main file
 */

var module = angular.module('isaleApp', ['ngRoute']);

module.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'HomeController',
            templateUrl:'/isale/components/home.html'
        })
        .when('/order', {
            controller: 'OrderController',
            templateUrl: '/isale/components/order.html'
        })
        .when('/memb',{
            controller:'MemberController',
            templateUrl:'/isale/components/member.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

module.directive('headBar', function () {
    return {
        restrict: 'EA',
        templateUrl: '/isale/tpl/head.html',
        replace: true
    }
});

module.directive('menuBar', function () {
    return {
        restrict: 'EA',
        templateUrl: '/isale/tpl/menu.html',
        replace: true
    }
});
module.directive('footBar', function () {
    return {
        restrict: 'EA',
        templateUrl: '/isale/tpl/foot.html',
        replace: true
    }
});


module.controller('OrderController', function ($scope, $http) {
    $http.get("/isale/order")
        .success(function (response) {
            $scope.records = response.records;
            $scope.total = response.total;
        });
});

module.controller('MemberController',function($scope,$http){

});
module.controller('HomeController',function($scope,$http){

});
