'use strict';

/**
 * @ngdoc module
 * @name Lazy
 *
 * @description
 *
 * module to acces lazy.js
 *
 *
 */

angular.module('LazyModule', []).factory('Lazy', function() {
  return window.Lazy;
});
