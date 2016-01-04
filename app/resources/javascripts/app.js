/**
 * Created by bjs on 2015/12/31.
 *
 * angular js main file
 */

var module = angular.module('isaleApp',['ngRoute']);



module.directive('headBar',function(){
    return {
        restrict:'EA',
        templateUrl:'/isale/tpl/head.html',
        replace:true
    }
});

module.directive('menuBar',function(){
    return {
        restrict:'EA',
        templateUrl:'/isale/tpl/menu.html',
        replace:true
    }
});
module.directive('footBar',function(){
    return {
        restrict:'EA',
        templateUrl:'/isale/tpl/foot.html',
        replace:true
    }
});