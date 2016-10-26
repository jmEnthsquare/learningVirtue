angular.module('virtue').config(['$urlRouterProvider','$stateProvider','$httpProvider','$locationProvider', function($urlRouterProvider, $stateProvider, $httpProvider, $locationProvider) {
	
	$urlRouterProvider.otherwise("/notfound");
	$locationProvider.html5Mode(true);


	var homeState = {
		name: 'home',
		url: '/',
		//template: '<h1>How Bout it?</h1>'
		templateUrl: '/views/home.html'
	}

	var page404State = {
		name: 'notfound',
		url: '/notfound',
		templateUrl: './views/404.html'
	}

	var staffState = {
		name: 'staff',
		url: '/staff',
		templateUrl: './views/staff.html'
	}


	var hofState = {
		name: 'hof',
		url: '/hof',
		templateUrl:'./views/hof.html'
	}

	var aboutState = {
		name: 'about',
		url: '/about',
		templateUrl: '/views/about.html'
	}

	var careerState = {
		name: 'career',
		url: '/career',
		templateUrl: './views/career.html'
	}

	var loginState = {
		name: 'login',
		url: '/login',
		templateUrl: './views/login.html'
	}

	var contactState = {
		name: 'contact',
		url: '/contact',
		templateUrl: './views/contact.html'
		//controller: 'contactCtrl'
	}

	var mythFactState = {
		name: 'mythfact',
		url: '/mythfact',
		templateUrl: './views/myth-fact.html'
	}

	var opportunitiesState = {
		name: 'opportunities',
		url:  '/opportunities',
		templateUrl:'./views/opportunities.html'
	}

	var trainingState = {
		name: 'training',
		url: '/training',
		templateUrl: './views/training.html'
	}

	var linuxCourseState = {
		name: 'linux',
		url: '/courses/linux',
		templateUrl: './views/courses/linux.html'
	}

	var uiuxCourseState = {
		name: 'ui-ux',
		url: '/courses/ui-ux',
		templateUrl: './views/courses/ui-ux.html'
	}

	var ciscoCourseState = {
		name: 'cisco',
		url: '/courses/cisco',
		templateUrl: './views/courses/cisco.html'
	}

	$stateProvider.state(homeState);
	$stateProvider.state(page404State);
	$stateProvider.state(staffState);
	$stateProvider.state(hofState);
	$stateProvider.state(aboutState);
	$stateProvider.state(careerState);
	$stateProvider.state(loginState);
	$stateProvider.state(contactState);
	$stateProvider.state(mythFactState);
	$stateProvider.state(opportunitiesState);
	$stateProvider.state(trainingState);
	$stateProvider.state(linuxCourseState);
	$stateProvider.state(uiuxCourseState);
	$stateProvider.state(ciscoCourseState);



}]);

