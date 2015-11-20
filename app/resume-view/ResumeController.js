'use strict';

var resume = angular.module('myApp.resume');

resume.controller('ResumeCtrl', ['$scope','$timeout','Data',function($scope,$timeout,Data) {
        $scope.SharedData = Data;

        $scope.$on('ngRepeatDone', function(ngRepeatComplete) {
            if($scope.SharedData.primeSects.length == 0){
                $scope.SharedData.primeSects = angular.copy($scope.SharedData.sects);
                $scope.SharedData.primeWords = angular.copy($scope.SharedData.keywords);
                $timeout(function(){$('#myModal').modal('show');}, 1000);
            }
        });
    }]);