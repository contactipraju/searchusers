'use strict';

angular.module('searchUsersApp').filter('displayFullname', function() {
	return function (user) {
		return user.firstname + ' ' + user.lastname;
	};
});

angular.module('searchUsersApp').filter('momentDate', function($window) {
	return function (epoch, relative) {

		if(relative) {
			return $window.moment.unix(epoch).fromNow();
		}

		return $window.moment(epoch*1000).format('ll');
	};
});
