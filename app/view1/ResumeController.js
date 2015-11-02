'use strict';

var resume = angular.module('myApp.resume', ['ngRoute','ngAnimate']);

resume.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume/all', {
    templateUrl: 'view1/resume.html',
    controller: 'ResumeCtrl'
  })
      .when('/resume/it', {
          templateUrl: 'view1/resume.html',
          controller: 'ResumeCtrl'
      })
      .when('/resume/engineering', {
          templateUrl: 'view1/resume.html',
          controller: 'ResumeCtrl'
      })
      .when('/resume/web', {
          templateUrl: 'view1/resume.html',
          controller: 'ResumeCtrl'
      });
}])

.controller('ResumeCtrl', ['$scope','Resume','$location',function($scope,Resume) {
        $scope.resumes = Resume.query();
        $scope.dragControlListeners = {
            //accept: function (sourceItemHandleScope, destSortableScope) {return true;},//override to determine drag is allowed or not. default is true.
            itemMoved: function (event) {
                event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
            },
            orderChanged: function(event) {
                },
            containment: '#board',//optional param.
            clone: true //optional param for clone feature.
        };
}]);