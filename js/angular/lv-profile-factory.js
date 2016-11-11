var virtue = angular.module('virtue');

virtue.factory('trainerFactory', function($http){
	



	function serviceMeth($http){
		console.log($http);
	}

	var service = $http({
		method: "GET",
		url: "trainers.json"
	});
// $http('GET|POST|PUT|DELETE', url, post, function(status, response){
// 	// success
// }, function(status, response){
// 	// error
// });

	return service;
});