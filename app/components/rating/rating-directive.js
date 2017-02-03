'use strict';
angular.module('cakeApp.rating', [])

.directive('rating', function () {
  return {
    restrict: 'A',
    template: '<span class="rating"><span ng-repeat="star in stars" ng-class="star"></span></span>',
    scope: {
        max: '='
    },
    link: function (scope, elem, attrs) {
      attrs.$observe( 'rating', function( value ) {
        buildStars(value);
      } )

      function buildStars(rating){
        scope.stars = [];
        for (var i = 0; i <= scope.max; i++) {
            scope.stars.push({
              'glyphicon': true,
              'glyphicon-star': i < rating,
              'glyphicon-star-empty': i > rating,
            });
        }
      }

    }
  }
});
