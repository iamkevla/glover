'use strict';

/**
 * @ngdoc function
 * @name gloverApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gloverApp
 */
angular.module('gloverApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
