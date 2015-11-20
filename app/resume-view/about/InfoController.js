/**
 * Created by michaelbarnes on 11/8/15.
 */
'use strict';

var nav = angular.module('myApp.resume');

nav.controller('InfoCtrl', ['$scope','$interval', function($scope,$interval){
    $scope.data = $scope.SharedData.data[0];
}]);
