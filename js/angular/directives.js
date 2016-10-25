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

