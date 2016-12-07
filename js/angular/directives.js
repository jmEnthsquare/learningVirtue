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
    template: "<a ui-sref='mythfact'><div class='ng-slider ball bubble' ng-style='pos'><h4 class='bu-bble'>Myth vs. Fact</h4></div></a>",
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

virtue.directive('lastone', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
       restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller, $window) {
      iElm.bind('click', function(){
      window.history.back();
    })
      
    }
  };
});

