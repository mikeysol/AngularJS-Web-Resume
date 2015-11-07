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
    .controller('ResumeCtrl', ['$scope','Resume','Data',function($scope,Resume,Data) {
        $scope.SharedData = Data;
        $scope.$on('ngRepeatDone', function(ngRepeatComplete) {
            if($scope.SharedData.primeSects.length == 0){
                $scope.SharedData.primeSects = angular.copy($scope.SharedData.sects);
            }
        });
    }]);