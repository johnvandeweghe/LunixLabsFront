'use strict';
/**
 * @ngdoc function
 * @name LunixLabsApp.service:LunixRest
 * @description
 * # LunixRest
 * Service for interacting with our own backend
 */
angular.module('LunixLabsApp')
.factory('LunixRest', function($http) {
    return {
        getProjects: function() {
            return $http.get('http://localhost:8080/1.0/projects.json')
                .then(function(result) {
                    return result.data;
                });
        }
    }
});
