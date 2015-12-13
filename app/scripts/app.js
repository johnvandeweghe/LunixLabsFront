'use strict';

/**
 * @ngdoc overview
 * @name LunixLabsApp
 * @description
 * # LunixLabsApp
 *
 * Main module of the application.
 */
angular
    .module('LunixLabsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl',
                controllerAs: 'projects'
            })
            .otherwise({
                redirectTo: '/'
            });
  });
