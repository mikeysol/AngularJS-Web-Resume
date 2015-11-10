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

resume.directive('highlight', function() {
    var component = function(scope, element, attrs) {

        if (!attrs.highlightClass) {
            attrs.highlightClass = 'angular-highlight';
        }

        var replacer = function(match, item) {
            return '<span class="'+attrs.highlightClass+'">'+match+'</span>';
        }
        var tokenize = function(keywords) {
            keywords = keywords.replace(new RegExp(',$','g'), '').split(',');
            var i;
            var l = keywords.length;
            for (i=0;i<l;i++) {
                keywords[i] = '\\W'+keywords[i].replace(new RegExp('^ | $','g'), '')+'\\W';
            }
            return keywords;
        }

        scope.$watch('keywords', function() {
            //console.log("scope.keywords",scope.keywords);
            if (!scope.keywords || scope.keywords == '') {
                element.html(scope.highlight);
                return false;
            }

            var tokenized	= tokenize(scope.keywords);
            var regex 		= new RegExp(tokenized.join('|'), 'gmi');

            // Find the words
            var html = scope.highlight.replace(regex, replacer);

            element.html(html);
        });
    }
    return {
        link: 			component,
        replace:		false,
        scope:			{
            highlight:	'=',
            keywords:	'='
        }
    };
});