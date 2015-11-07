/**
 * Created by michaelbarnes on 11/5/15.
 */

'use strict';

var nav = angular.module('myApp.resume');

nav.controller('SideCtrl', ['$scope','Data', function($scope,Data){
    $scope.SharedData = Data;

    $scope.viewControlName = function(obj){
        return obj.sectId.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    $scope.checkNum = function(val){
        return angular.isNumber(val);
    };

    $scope.reset = function(){
        angular.copy($scope.SharedData.primeSects,$scope.SharedData.sects);
        $scope.SharedData.query = '';
    };
}]);
