'use strict';

/**
 * @ngdoc function
 * @name searchUsersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchUsersApp
 */
angular.module('searchUsersApp')
  .controller('MainCtrl', function ($scope, UsersService) {
	$scope.userFilters = [];

	function init () {
		$scope.userFilters = UsersService.getUserFilters();
		$scope.currentFilter = $scope.userFilters[0];
	}

	init();
  });
