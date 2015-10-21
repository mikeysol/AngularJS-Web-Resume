'use strict';

var resume = angular.module('myApp.view1', ['ngRoute']);

resume.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
      $http.get('resume/michael-barnes-resume.json').success(function(data){
        $scope.resumes = data;
      });
}]);