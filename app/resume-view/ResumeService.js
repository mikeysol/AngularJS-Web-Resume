/**
 * Created by michaelbarnes on 10/31/15.
 */

var resumeServices = angular.module('resumeServices', ['ngResource']);

resumeServices.factory('Resume', ['$resource',
    function($resource){
        return $resource('resume/:resumeId.json', {}, {
            query: {method:'GET', params:{resumeId: 'michael-barnes-resume'}, isArray:true}
        });
    }]);

resumeServices.service('Data',['Resume',
    function(Resume){
        var SharedData ={
            keywords: "java,html5,angularjs,c\\+\\+,python,sql,android," +
            "javascript,front-end,back-end,agile,bi,unit tests",
            primeWords: "",
            intro: true,
            summary: true,
            skills: [],
            employment: [],
            education: [],
            projects: [],
            query: '',
            sects: [],
            primeSects: [],
            resumes: Resume.query()
        };
        return SharedData;
    }
]);