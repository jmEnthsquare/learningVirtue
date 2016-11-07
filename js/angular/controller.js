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

