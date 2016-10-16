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
            return $http.get(window.__lunixEnv.apiUrl)
                .then(function(result) {
                    return result.data;
                });
        }
    }
});
