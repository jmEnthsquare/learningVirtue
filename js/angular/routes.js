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
		templateUrl: './views/staff.html',
		controller: 'trainerCtrl'
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

	var careerGoalsState = {
		name: 'career',
		url: '/career',
		templateUrl: './views/careerGoals.html'
	}

	var careerState = {
		name: 'careers',
		url: '/careers',
		templateUrl: './views/careers.html'
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

	var javaCourseState = {
		name: 'java',
		url: '/courses/java',
		templateUrl: './views/courses/java.html'
	}

	var dbaCourseState = {
		name: 'dba',
		url: '/courses/dba',
		templateUrl: './views/courses/dba.html'
	}


	var uiuxCourseState = {
		name: 'ui-ux',
		url: '/courses/ui-ux',
		templateUrl: './views/courses/ui-ux.html'
	}

	var ciscoCourseState = {
		name: 'cisco',
		url: '/courses/cisco/:mod',
		controller: 'tabCtrl',
		templateUrl: './views/courses/cisco.html'
	}

	var webDeveloperState = {
		name: 'web-developer',
		url: '/courses/web-developer',
		templateUrl: './views/courses/webdeveloper.html'

	}

	var AdvancedWebDeveloperState = {
		name: 'web-developer-2',
		url: '/courses/web-developer-2',
		templateUrl: './views/courses/webdeveloperII.html'

	}


	var calendarState = {
		name: 'calendar',
		url: '/calendar',
		controller: 'calendarCtrl',
		controller: 'scrollCtrl',
		templateUrl: './views/calendar.html'
	}

	var c2cState = {
		name: 'college-corporate',
		url:'/courses/college-corporate',
		controller: 'tabCtrl',
		templateUrl: './views/courses/c2c.html'
	}

	var workshopState = {
		name: 'workshops',
		url: '/workshops',
		templateUrl: './views/workshops.html'
	}

	var whyLinuxState = {
		name: 'why-linux',
		url: '/why-linux',
		templateUrl: './views/why/why-linux.html'
	}

	var whyNetworkState = {
		name: 'why-network',
		url: '/why-network',
		templateUrl: './views/why/why-networking.html'
	}


var whyDevelopState = {
		name: 'why-develop',
		url: '/why-develop',
		templateUrl: './views/why/why-development.html'
	}


	$stateProvider.state(homeState);
	$stateProvider.state(page404State);
	$stateProvider.state(staffState);
	$stateProvider.state(hofState);
	$stateProvider.state(aboutState);
	$stateProvider.state(careerState);
	$stateProvider.state(careerGoalsState);
	$stateProvider.state(loginState);
	$stateProvider.state(contactState);
	$stateProvider.state(mythFactState);
	$stateProvider.state(opportunitiesState);
	$stateProvider.state(trainingState);
	$stateProvider.state(linuxCourseState);
	$stateProvider.state(javaCourseState);
	$stateProvider.state(dbaCourseState);
	$stateProvider.state(uiuxCourseState);
	$stateProvider.state(ciscoCourseState);
	$stateProvider.state(webDeveloperState);
	$stateProvider.state(AdvancedWebDeveloperState);
	$stateProvider.state(calendarState);
	$stateProvider.state(c2cState);
	$stateProvider.state(workshopState);
	$stateProvider.state(whyLinuxState);
	$stateProvider.state(whyNetworkState);
	$stateProvider.state(whyDevelopState);


	$stateProvider.state('train',{
		abstract: true,
		url: '/train',
		templateUrl: './views/train.html'
	})

	$stateProvider.state('train.training', {
		url: '/trainup',
		templateUrl: './views/calendar.html',
		controller: 'calendarCtrl'
	})

}]);

