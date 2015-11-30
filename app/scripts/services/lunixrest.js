'use strict';
/**
 * @ngdoc function
 * @name LunixLabsApp.service:LunixRest
 * @description
 * # LunixRest
 * Service for interacting with our own backend
 */
angular.factory('LunixRest', function($http) {
    return {
        getProjects: function() {
            return $http.get('http://api.lunixlabs.com/projects')
                .then(function(result) {
                    return result.data;
                });
        }
    }
});
