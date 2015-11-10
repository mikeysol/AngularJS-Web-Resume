'use strict';

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
}])
    .controller('ResumeCtrl', ['$scope','$timeout','Resume','Data',function($scope,$timeout,Resume,Data) {
        $scope.SharedData = Data;
        var detectIE = function()
        // Returns the version of Internet Explorer or a 0
        // (indicating the use of another browser).
        {
            var rv = 0; // Return value assumes failure.
            if (navigator.appName == 'Microsoft Internet Explorer')
            {
                var ua = navigator.userAgent;
                var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua) != null)
                    rv = parseFloat( RegExp.$1 );
            }
            return rv;
        };

        var findStyleSheet = function (sheetName, styleSheets){
            var i = 0;
            var sheetRe = new RegExp(sheetName + '$');

            while(i < styleSheets.length){
                try {
                    if (styleSheets[i].href.match(sheetRe)) {
                        return styleSheets[i];
                    }
                    } catch (e) {
                    }
                i++;
            }
            return false;
        };

        var sheet = findStyleSheet("app.css",document.styleSheets);

        var addCSSRule = function(sheet, selector, rules, index) {
            if("insertRule" in sheet) {
                sheet.insertRule(selector + "{" + rules + "}", index);
            }
            else if("addRule" in sheet) {
                sheet.addRule(selector, rules, index);
            }
        };

        if(detectIE()){
            addCSSRule(sheet, "#rowview", "background: white");
            addCSSRule(sheet, "#summary,#skills,#employment,#education,#projects", "background: white !important");
        }

        $scope.$on('ngRepeatDone', function(ngRepeatComplete) {

            jQuery('#rowview').attr('background', 'none');
            if($scope.SharedData.primeSects.length == 0){
                $scope.SharedData.primeSects = angular.copy($scope.SharedData.sects);
                $timeout(function(){$('#myModal').modal('show');}, 1000);
            }
        });
    }]);