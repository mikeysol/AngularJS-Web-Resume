'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'resumeServices',
    'resumeFilters',
    'myApp.resume',
    'as.sortable'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/resume/all'});
}]);
