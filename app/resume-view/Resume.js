/**
 * Created by michaelbarnes on 11/19/15.
 */
'use strict';
// Declare view level module and dependencies for the views

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
}]);