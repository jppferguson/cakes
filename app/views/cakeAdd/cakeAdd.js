'use strict';

angular.module('cakeApp.cakeAddView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cakes/add', {
    templateUrl: 'views/cakeAdd/cakeAdd.html',
    controller: 'CakeAddCtrl'
  });
}])

.controller('CakeAddCtrl', ['$scope', 'cakeFactory', '$location', function($scope, cakeFactory, $location) {
  $scope.newCake = [];
  $scope.submit = function() {
    cakeFactory.add($scope.newCake).then(function(resp){
      $location.path( "/cakes" );
    })
  };
}]);
