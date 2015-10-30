/**
 * Created by michaelbarnes on 10/29/15.
 */
'use strict';

var nav = angular.module('myApp.resume');

nav.controller('NavCtrl', ['$scope', '$location', function($scope, $location){

    $scope.isActive = function (viewLocation) {
        console.log($location.path());
        return viewLocation === $location.path();
    };

    $scope.navList =[{
            name: 'All',
            route: '/resume/all'
        },
        {
            name: 'IT',
            route:'/resume/it'
        },
        {
            name: 'Engineering',
            route: '/resume/engineering'
        },
        {
            name: 'Web',
            route: '/resume/web'
        }];

}]);
