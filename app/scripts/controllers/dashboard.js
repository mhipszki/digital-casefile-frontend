'use strict';

/**
 * @ngdoc function
 * @name digitalCasefileApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the digitalCasefileApp
 */
angular.module('digitalCasefileApp')
  .controller('DashboardCtrl', function ($scope, localstore) {

    $scope.data = localstore.data;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
