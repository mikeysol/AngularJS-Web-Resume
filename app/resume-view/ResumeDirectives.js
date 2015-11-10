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
