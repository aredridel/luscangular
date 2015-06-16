'use strict';

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($http, $scope) {
  $http.get('/phones').success(function(data) {
    $scope.phones = data;
  });
});
