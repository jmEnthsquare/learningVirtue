/**
* virtue
*
* Description
*/
var virtue = angular.module('virtue');
virtue.directive('camera', [
  "$compile", "$timeout", function($compile, $timeout) {
    return {
      restrict: 'AE',
      link: function($scope, element, attr) {
        return $timeout(function() {
          return element.camera($scope.options);
        }, 500);
      }
    };
  }
]);

virtue.directive('accordion', function(){
  return {
     restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
    link: function($scope, $element, attrs, controller) {
      $(document).ready(function () {
            $element.accordion({
                active: false,
                header: '.accordion_header',
                heightStyle: 'content',
                collapsible: true
            });
        });
      }
    }
  });
virtue.directive('para-lax', function(){
  // Runs during compile
  return {
       restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
      link: function($scope, $element, attrs, controller) {
        ( document ).ready(function(){
      RDParallax_autoinit('.parallax');
    });

    }
  };
});
virtue.directive('fancybox', function(){
  // Runs during compile
  return {
       restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
    link: function($scope, $element, attrs) {
      $($element).fancybox({});
    }
  };
});

virtue.directive('ngBubbleSlider', function() {
  return {
    scope: true,
    template: "<div class='ng-slider ball bubble' ng-style='pos'><h4 class='bu-bble'>Myth vs. Fact</h4></div>",
    replace: true,
    controller: function($scope, $interval) {

      $scope.pos = {
        top: 0,
        left: 0
      };
      
      $scope.newPos = function() {
        // calculate however you'd like:
        $scope.pos.top = Math.random() * 400 + "px";
        $scope.pos.left = Math.random() * 2000 + "px";
      }

      $interval($scope.newPos, 1000);
    }
  };
});

