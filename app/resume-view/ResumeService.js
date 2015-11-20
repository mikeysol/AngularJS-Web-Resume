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
            data: ["Hi, I am <b>Michael Barnes</b> and this is a small demo in <b>AngularJS</b> that turns a standard resume" +
            " into something more fun. <br/> <br/>" +
            "<ul><li>You can <b>filter</b> out sections via the search bar</li>" +
            "<li><b>Reorder</b> the sections via the Section View panel</li>" +
            "<li>At the top of page <b>navigate to different perspectives</b> such as Web or all Software Engineering.</li>" +
            "<li><b>Toggle colored Buzz Words</b> on/off to help scan for desired skills</li></ul>" +
            "I will be adding features over time. Check out the source code on my gitHub.<br/>" +
            "If you're <b>hiring</b> then connect with me on LinkedIn or send me an email.<br/>" +
            "Thanks and enjoy!"],
            resumes: Resume.query()
        };
        return SharedData;
    }
]);