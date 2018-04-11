'use strict';

/**
 * Routes
 */
angular.module('searchUsersApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/views/controllers/users.view.html',
      controller: 'UsersCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
