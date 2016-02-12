'use strict';

angular.module('TaskApp', [
    'ngRoute',
    'ui.utils',
    'TaskAppControllers',
    'LocalStorageModule'
])   
.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/list', {
            templateUrl: 'app/partials/list.html',
            controller: 'TaskListCont'
        }).
        when('/new/step1', {
            templateUrl: 'app/partials/new_step1.html',
            controller: 'TaskListCont'
        }).
        when('/new/step2', {
            templateUrl: 'app/partials/new_step2.html',
            controller: 'TaskListCont'
        }).
        otherwise({
            redirectTo: '/list'
    });
}])
.filter('phoneNum', function() {
    return function(input) {
        input = input || "";
        if(input.length == 10){
            return input.replace(/(\d{3})(\d{3})(\d{4})/, '$1/$2-$3');
        }
    }
});
