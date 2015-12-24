'use strict';

/**
 * @ngdoc function
 * @name LunixLabsApp.controller:TimelineCtrl
 * @description
 * # AboutCtrl
 * Controller of the LunixLabsApp
 */
angular.module('LunixLabsApp')
    .controller('ProjectsCtrl', function ($scope, LunixRest) {
        LunixRest.getProjects().then(function(projects){
            $scope.projects = projects;
        });
        $scope.openLink = function(url, $event){
            window.open(url, '_blank');
            $event.preventDefault();
            $event.stopPropagation();
        };
    });
