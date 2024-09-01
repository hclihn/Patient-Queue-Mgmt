var myApp = angular.module('myApp',[]);

//myApp.directive('myDirective', function() {});
//myApp.factory('myService', function() {});
//https://jsfiddle.net/yaprak/3HeFB/
//http://jsfiddle.net/bcaudan/TZQnS/

myApp.controller('MyCtrl', function($scope) {
    $scope.name = 'Superhero';
    $scope.patients = [
    	{masterNumber: 12, timeStamp: 123, wants: ["DC", "OMD", "Dental"], inDep: [1, 2, 1]},
      {masterNumber: 15, timeStamp: 128, wants: ["DC", "Dental"], inDep: [2, 1]},
      {masterNumber: 170, timeStamp: 126, wants: ["OMD", "Dental"], inDep: [1, 2]},
      {masterNumber: 5, timeStamp: 100, wants: ["Dental"], inDep: [1]},
      {masterNumber: 19, timeStamp: 124, wants: ["DC", "OMD", "Dental"], inDep: [1, 2, 1]},
      {masterNumber: 2, timeStamp: 12, wants: ["DC", "OMD", "Dental"], inDep: [2, 0, 0]},
    ];
    $scope.departments = [
      {name: "DC"},
      {name: "OMD"},
      {name: "Dental"},
    ];
    $scope.inDep = function(patient, department) {
      var idx = patient.wants.indexOf(department.name);
      return  idx >= 0 && patient.inDep[idx] == 2;
    };
    $scope.inQueue = function(patient, department) {
      var idx = patient.wants.indexOf(department.name);
      return  idx >= 0 && patient.inDep[idx] == 1;
    };
    $scope.visited = function(patient, department) {
      var idx = patient.wants.indexOf(department.name);
      return  idx >= 0 && patient.inDep[idx] === 0;
    };
});
