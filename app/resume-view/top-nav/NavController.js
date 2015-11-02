/**
 * Created by michaelbarnes on 10/29/15.
 */
'use strict';

var nav = angular.module('myApp.resume');

nav.controller('NavCtrl', ['$scope','$rootScope', '$location', function($scope,$rootScope,$location){

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.navList =[{
            name: 'All',
            route: '/resume/all',
            func: function(){
                $location.path('/resume/all');
            }
        },
        {
            name: 'IT',
            route:'/resume/it',
            func: function(){
                $location.path('/resume/it');
            }
        },
        {
            name: 'Engineering',
            route: '/resume/engineering',
            func: function(){
                $location.path('/resume/engineering');
            }
        },
        {
            name: 'Web',
            route: '/resume/web',
            func: function(){
                $location.path('/resume/web');
            }
        }];
}]);
