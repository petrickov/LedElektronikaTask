'use strict';

angular.module('TaskAppControllers', [])
    .controller('TaskListCont', ["$scope", "$http", "$location", "localStorageService", function($scope, $http, $location, localStorageService) {
        
                    
        $http.get('app/json/cars.json').success(function(data){
            $scope.cars = data;
        });
         
        var listData = localStorageService.get('list');
        $scope.list = listData || [];
        
        var formData = localStorageService.get('form');
        $scope.newData = formData || {name:"", surname:"", email:"", brand:"", model:"", phone:""}; 
        
        $scope.modal = false;
        
        $scope.submitStep1 = function(isValid){
            if(isValid){
                $location.path("new/step2");
            }
        };
        
        $scope.submitStep2 = function(isValid){
            if(isValid){
                $scope.modal = true;
            }
        };
        
        $scope.confirmInsert = function(){
            $scope.list.push($scope.newData);
            $scope.newData = {name:"", surname:"", email:"", brand:"", model:"", phone:""};
            $scope.modal = false;
            $location.path("#/");
        };
        
        $scope.cancelInsert = function(){
            $scope.newData = {name:"", surname:"", email:"", brand:"", model:"", phone:""};
            $scope.modal = false;
            $location.path("#/");
        };
        
        
        $scope.deleteItem = function  (index) {
            $scope.list.splice(index, 1);
        };
        
        $scope.$watch('list', function () {
            localStorageService.set('list', $scope.list);
        }, true);
        
        $scope.$watch('newData', function () {
            localStorageService.set('form', $scope.newData);
        }, true);
}]);
