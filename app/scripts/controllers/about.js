'use strict';

/**
 * @ngdoc function
 * @name gloverApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gloverApp
 */
angular.module('gloverApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
