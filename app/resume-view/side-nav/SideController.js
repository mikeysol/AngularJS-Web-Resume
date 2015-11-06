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

    $scope.setDnD = function(val){
        var state = !val;
        var myEl = angular.element( document.querySelector( '#sectView' ) );
        myEl.attr('is-disabled',state);
        $compile(myEl)($scope);
    };
}]);
