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
        $scope.resumes = Resume.query();
        $scope.SharedData = Data;
    }]);