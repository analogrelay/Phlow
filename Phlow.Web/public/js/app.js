(function() {
    'use strict';

    angular.module('phlow.core', [
        'ngRoute',
        'phlow.controllers'
    ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', { templateUrl: 'views/home.html', controller: 'home' });
        }]);
})();