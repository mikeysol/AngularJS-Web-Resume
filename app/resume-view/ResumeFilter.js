/**
 * Created by michaelbarnes on 11/1/15.
 */
var resFilters = angular.module('resumeFilters', []);

resFilters.filter('perspective', function($location) {
    return function (items) {
        var filtered = [];
        var path = $location.path();
        var resumePaths = {
            "/resume/all": "all",
            "/resume/it": "it",
            "/resume/engineering": "engineering",
            "/resume/web": "web"
        };

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.type.hasOwnProperty(resumePaths[path])) {
                filtered.push(item);
            }else if ("all" === resumePaths[path]){
                return items;
            }
        }
        return filtered;
    };
});

