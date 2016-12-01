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

virtue.factory('FeedService', ['$http', function($http){
	return {
	parseFeed: function (){
	
		return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(feedUrl));

	}
}
}]);