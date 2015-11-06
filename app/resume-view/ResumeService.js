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
            query: '',
            sects: [],
            resumes: Resume.query()
        };
        return SharedData;
    }
]);