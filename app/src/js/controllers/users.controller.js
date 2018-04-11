'use strict';

angular.module('searchUsersApp').controller('UsersCtrl', function ($scope, UsersService) {
	$scope.users = [];
	$scope.search = '';

	function init () {
		$scope.users = UsersService.getAllUsers();
	}

	init();
});