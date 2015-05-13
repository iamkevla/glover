'use strict';

/**
 * @ngdoc directive
 * @name dealerPortalApp.directive:dpFax2Email
 * @restrict A
 *
 * @description
 *
 *
 * @element ANY
 *
 * @example
  <example name="dp-fax2-email">
    <div fileReader >drop files here</div>
  </example>
 */

angular.module('gloverApp')
  .directive('fileReader', ['$window',
    function($window) {

      return {
        templateUrl: 'scripts/directives/fileReader/fileReader.tmpl.html',
        scope: {
          results: '='
        },
        link: function($scope, $element) {

          var filedrag = $element.find('#filedrag');

          function fileDragHover(e) {
            e.stopPropagation();
            e.preventDefault();
          }

          // file selection
          function FileSelectHandler(e) {
            fileDragHover(e);
            var files = e.target.files || e.originalEvent.dataTransfer.files;
            parseFile(files[0]);
          }


          function parseFile(file) {
            var textType = /application.json/;
            if (file.type.match(textType)) {
              var reader = new $window.FileReader();

              reader.onload = function() {
                $scope.$apply(function() {
                  $scope.results = JSON.parse(reader.result);
                });
              };

              reader.readAsText(file);
            } else {
              $scope.$apply(function() {
                $scope.results = 'File not supported!';
              });
            }

          }

          filedrag.on('dragover', fileDragHover);
          filedrag.on('drop', FileSelectHandler);
          filedrag.on('dragleave', fileDragHover);

        }

      };

    }

  ]);
