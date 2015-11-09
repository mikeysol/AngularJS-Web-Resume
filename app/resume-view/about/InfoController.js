/**
 * Created by michaelbarnes on 11/8/15.
 */
'use strict';

var nav = angular.module('myApp.resume');

nav.controller('InfoCtrl', ['$scope','$interval', function($scope,$interval){
    $scope.data = ["Hi, I am Michael Barnes and I developed this small WebApp to feature my resume" +
    " and to help recruiters or hiring managers get to know me. Here a user can filter it by searching for words in the search bar, reorder the " +
    "sections of the resume in the Section View panel, and view the resume from different perspectives such as Web or all Software Engineering. " +
    "I will be updating this app and adding features over time. Check out the source code on my gitHub. If you're hiring then connect with me on LinkedIn or send me an email. " +
    "Thanks and enjoy!"];
    $scope.index = 0;

    $scope.previous = function(){
        if($scope.index === 0){
            $scope.index = $scope.data.length - 1;
        }else{
            $scope.index--;
        }
    };

    $scope.next = function(){
        if($scope.index === $scope.data.length - 1){
            $scope.index = 0;
        }else{
            $scope.index++;
        }
        console.log("hello");
    };

   // $interval($scope.next, 4000);
}]);
