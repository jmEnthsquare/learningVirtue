'use strict';

var virtue = angular.module('virtue');
var feedUrl = 'http://www.networkworld.com/category/education/index.rss';


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

virtue.controller('tabCtrl', ['$scope', '$stateParams', function($scope, $stateParams){

	$scope.tab   = 'html5';
  $scope.level = 'entry';
	// $scope.slab = 'ccna';
	var mod = $stateParams.mod;
	if (!mod) {
		$scope.slab = "ccna";
		// $scope.tab = 'html5';
	}
	else{
		$scope.slab = mod;
	}


	
}]);

virtue.controller('contactCtrl', function($scope, $interval, NgMap){
	
	NgMap.getMap().then(function(map){
		$scope.showCustomMarker = function(evt){
			map.customMarkers.lv.setVisible(true);
			map.customMarkers.lv.setPosition(this.getPosition());
		};
		$scope.closeCustomMarker = function(evt){
			this.style.display = 'none';
		}

	})
});



virtue.controller('calendarCtrl', ['$scope','uiCalendarConfig', function($scope, uiCalendarConfig) {
//console.log(uiCalendarConfig);
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
      url: '/courses/linux',
      //allDay: 'false'
  },

      {title: 'CCIE Boot Camp',
      start: new Date(y, 10, 14),
      end: new Date(y, 11, 14),
      url: '/courses/cisco',
  	  //allDay: 'false'
},

      {title: 'Web Development',
      start: new Date(y, 10, 1),
      end: new Date(y, 11, 26),
      url: '/courses/web-developer',
      allDay: 'false'
  },

      {title: 'Dev Ops',
      start: new Date(y, 10, 15),
      end: new Date(y, 10, 26),
      allDay: 'false'
},

      {title: 'Corporate Ethics',
      start: new Date(y, 10, 15),
      end: new Date(y, 10, 26),
      url: '/workshops',
	  allDay: 'false'
},

      {title: 'Communication Skills',
      start: new Date(y, 10, 18),
      end: new Date(y, 11, 2),
      //url: 'http://google.com/',
	  allDay: 'false'
},

      {title: 'Cloud Computing',
      start: new Date(y, 10, 20),
      end: new Date(y, 11, 2),
      //url: 'http://google.com/',
	  allDay: 'false'
},


      {title: 'Android',
      start: new Date(y, 11, 1),
      end: new Date(y, 11, 24),
      //url: 'http://google.com/',
	  allDay: 'false'
},

      {title: 'iOS & iOT',
      //start: new Date(y, 11, 5),
      //end: new Date(y, 11, 28),
      start: '2016-11-05T10:30:00',
      end: '2017-01-05T10:30:00',
      //url: 'http://google.com/',
  allDay: 'false'
},





      // {id: 999,title: 'Repeating Events',start: new Date(y, m, d - 3, 16, 0),allDay: true},
      // {id: 999,title: 'Repeat Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      // {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      // {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];

    $scope.colours = {
    	color:'black',
    	textColor: 'yellow',
    	eventColor: '#378006'
    }

    $scope.eventSource = {
            //url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago', // an option!
            color:'black',
    		textColor: 'yellow'

    };
    /* eve
    /* config object */
    $scope.uiConfig = {
      calendar:{
      				editable: false,
			selectable: true,
			eventLimit: true,
			//weekends: false,
			    	color:'black',
    	textColor: 'yellow',
    	eventColor: '#4fbf4f',
        //height: 450,
        //editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender,
      }
    };
        $scope.eventSources = [$scope.events, $scope.eventSource, $scope.colours];
        //console.log($scope.eventSources);
    	//$scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

}]);


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

virtue.controller('trainerCtrl', function($scope, trainerFactory, $location, $anchorScroll){
	
	activate();

	$scope.trainerDetail = {};


	function scrollToDetails(){
		console.log('scrolling !!');
		$location.hash('trainerDesc');
    $anchorScroll.yOffset = 200;
		$anchorScroll();
	}


	$scope.showDetail = function(trainer){
		$location.hash('');
		$scope.trainerDetail = trainer;
		$('#trainerDesc').show();
		scrollToDetails();

	}

	function activate(){
		getTrainerData();
		$('#trainerDesc').hide();
	}

	function scrollToDiv(){

	}



	function getTrainerData(){
		trainerFactory.then(function(res){
			//console.log(res);
			$scope.data = res.data;
			console.log($scope.data);

		}) //end then
	}


}); //end trainerCtrl

virtue.controller('scrollCtrl', function($document, $scope){
  
}).value('duScrollOffset', 200);

virtue.controller('rssCtrl', ['$scope' , 'FeedService', '$window', function($scope, Feed, $window){
      
      $scope.numberOfPostsPerPage = 5;
      $scope.totalPosts = null;
      $scope.startPoint = 0;
      $scope.pages = null;
      $scope.pagesArray = []

      function setPagesArray() {
        for(var i = 0; i < $scope.pages; i++){
          $scope.pagesArray.push(i+1);
        }
      }
      
      activate();

      function activate(){
        getPosts()
        .then(getNumPages)
        .then(setPagesArray);
      }




    function getPosts(){
      return Feed.parseFeed().then(function(res){
        $scope.feeds = res.data.responseData.feed.entries;
        console.log($scope.feeds);

          return $scope.totalPosts = $scope.feeds.length;
         

      });

    } //end getPosts

    function getNumPages(){

          var pages = $scope.totalPosts/$scope.numberOfPostsPerPage;
          return $scope.pages = Math.ceil(pages);
                  console.log($scope.pages);
      
    }

    $scope.pageTurn = function(pageNumber){
      $scope.startPoint = (pageNumber - 1)* $scope.numberOfPostsPerPage;
      $window.scrollTo(0,0);
      return $scope.startPoint;
    }

    $scope.pageTurn();





  
}]);


