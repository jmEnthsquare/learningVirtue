'use strict';

var virtue = angular.module('virtue');

virtue.controller('formCtrl', ['$scope', function($scope){

		// $('#registerBtn').click(function(e) {
		// 	e.preventDefault();
		// 	$('#signup').delay(100).fadeIn(100);
		// 	$('#login').fadeOut(100);
		// });
		// $('#loginBtn').click(function(e) {
		// 	e.preventDefault();
		// 	$('#login').delay(100).fadeIn(100);
		// 	$('#signup').fadeOut(100);
		// });

	//$scope.items = ['register', 'login'];
	console.log('check it out');
	//$scope.selection = $scope.items[0];
}]);

virtue.controller('tabCtrl', ['$scope', function($scope){
	$scope.tab = 'html5';
	
}]);