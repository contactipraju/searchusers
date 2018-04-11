'use strict';

/**
 * @ngdoc function
 * @name searchUsersApp.directive:ex-user
 * @description
 * # ex-user
 * Directive for displaying user details
 */
angular.module('searchUsersApp').directive('exUser', function () {
  	return {
  		restrict: 'E',
  		replace: true,
  		scope : {
  			user: '='
  		},
  		controller: ['$scope', function($scope) {
  			console.log('rendering data for user: ', $scope.user);
  		}],
  		templateUrl: 'src/views/directives/ex-user.template.html'
  	};
});
