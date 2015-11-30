'use strict';

/**
 * @ngdoc function
 * @name LunixLabsApp.controller:TimelineCtrl
 * @description
 * # AboutCtrl
 * Controller of the LunixLabsApp
 */
angular.module('LunixLabsApp')
    .controller('TimelineCtrl', ['$scope', function ($scope, LunixRest) {
        LunixRest.getProjects().then(function(projects){
            $scope.projects = projects;
        });
    }]);
