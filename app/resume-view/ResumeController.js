'use strict';

var resume = angular.module('myApp.resume', ['ngRoute','ngAnimate']);

resume.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume/all', {
    templateUrl: 'resume-view/resume.html',
    controller: 'ResumeCtrl'
  })
      .when('/resume/it', {
          templateUrl: 'resume-view/resume.html',
          controller: 'ResumeCtrl'
      })
      .when('/resume/engineering', {
          templateUrl: 'resume-view/resume.html',
          controller: 'ResumeCtrl'
      })
      .when('/resume/web', {
          templateUrl: 'resume-view/resume.html',
          controller: 'ResumeCtrl'
      });
}])
    .controller('ResumeCtrl', ['$scope','$timeout','Resume','Data',function($scope,$timeout,Resume,Data) {
        $scope.SharedData = Data;
        console.log($scope);
        $scope.$on('ngRepeatDone', function(ngRepeatComplete) {
            if($scope.SharedData.primeSects.length == 0){
                $scope.SharedData.primeSects = angular.copy($scope.SharedData.sects);
                $timeout(function(){$('#myModal').modal('show');}, 1000);
            }
        });
    }]);