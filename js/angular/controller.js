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
	$scope.slab = 'ccna';
	
}]);

virtue.controller('contactCtrl', function($scope, $interval, NgMap){
	
	NgMap.getMap().then(function(map){
		$scope.showCustomMarker = function(evt){
			map.customMarkers.lv.setVisible(true);
			map.customMarkers.lv.setPosition(this.getPosition());
		};
		$scope.closeCustomMarker = function(evt){
			//this.style.display = 'none';
		}

	})
});



virtue.controller('calendarCtrl', function($scope) {

		    var date = new Date();
    		var d = date.getDate();
    		var m = date.getMonth();
    		var y = date.getFullYear();

	    $scope.events = [
      // {title: 'All Day - Every Day',
      // start: new Date(y, 10, 14)},
      //{title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      // {title: 'Linux Admin Course',
      // start: new Date(y, m, d - 5),
      // end: new Date(y, m, d - 0)},
      {title: 'Linux Admin Course',
      start: new Date(y, 10, 14),
      end: new Date(y, 11, 14),
      url: '/courses/linux'},

      {title: 'CCIE Boot Camp',
      start: new Date(y, 10, 14),
      end: new Date(y, 11, 14),
      url: '/courses/cisco'},

      {title: 'Web Development',
      start: new Date(y, 10, 1),
      end: new Date(y, 11, 26),
      url: '/courses/web-developer'},

      {title: 'Dev Ops',
      start: new Date(y, 10, 15),
      end: new Date(y, 10, 26)},

      {title: 'Corporate Ethics',
      start: new Date(y, 10, 15),
      end: new Date(y, 10, 26),
      url: '/workshops'},

      {title: 'Communication Skills',
      start: new Date(y, 10, 18),
      end: new Date(y, 11, 2),
      url: 'http://google.com/'},

      {title: 'Cloud Computing',
      start: new Date(y, 10, 20),
      end: new Date(y, 11, 2),
      url: 'http://google.com/'},


      {title: 'Android',
      start: new Date(y, 11, 1),
      end: new Date(y, 11, 24),
      url: 'http://google.com/'},

      {title: 'iOS & iOT',
      start: new Date(y, 11, 5),
      end: new Date(y, 11, 28),
      url: 'http://google.com/'},





      // {id: 999,title: 'Repeating Events',start: new Date(y, m, d - 3, 16, 0),allDay: true},
      // {id: 999,title: 'Repeat Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      // {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      // {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];

    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };
    /* eve
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };
        $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    	//$scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

});


virtue.controller('advertScrollCtrl', function(){

function animatecontent(ele,modifier){
      var sl = ele.scrollLeft();
      ele.animate({scrollLeft: sl + (modifier * 120)}, 500, 'linear',function(){
            if(hover){
                animatecontent(ele,modifier);

            }
        });
};
var hover=false;
$('.scroll-arrow').each(function(){
    var modifier = ($(this).hasClass('right')) ? 1 : -1;
    var sib = ('.shelf-slide');
    $(this).hover(function() {
        hover=true;
		//$(this).siblings(sib).stop();
      animatecontent($(this).siblings(sib),modifier);     
	}, function() {
        hover=false;
        $(this).siblings(sib).stop();
    });
});
	
});

