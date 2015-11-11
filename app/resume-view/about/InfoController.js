/**
 * Created by michaelbarnes on 11/8/15.
 */
'use strict';

var nav = angular.module('myApp.resume');

nav.controller('InfoCtrl', ['$scope','$interval', function($scope,$interval){
    $scope.data = ["Hi, I am <b>Michael Barnes</b> and I developed this small WebApp in <b>AngularJS</b> featuring my resume" +
    " to help recruiters or hiring managers get to know me. <br/> <br/>" +
    "<ul><li>You can <b>filter</b> out sections via the search bar</li>" +
    "<li><b>Reorder</b> the sections via the Section View panel</li>" +
    "<li>At the top of page <b>navigate to different perspectives</b> such as Web or all Software Engineering.</li>" +
    "<li><b>Toggle colored Buzz Words</b> on/off to help scan for desired skills</li></ul>" +
    "I will be updating this app and adding features over time. Check out the source code on my gitHub.<br/>" +
    "If you're <b>hiring</b> then connect with me on LinkedIn or send me an email.<br/>" +
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
