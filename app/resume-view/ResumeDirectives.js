/**
 * Created by michaelbarnes on 11/7/15.
 */
var resume = angular.module('myApp.resume');

resume.directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('ngRepeatDone');
                    });
                }
            }
        }
});

resume.directive('onResize', function () {
    return {
        restrict: 'C',
        link: function (scope, element, attr) {
            if ($(window).width < 769) {
                $('#sidebar').removeAttribute('position');
                scope.apply();
            }
        }
    }
});