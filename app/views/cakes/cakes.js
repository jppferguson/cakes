'use strict';

angular.module('cakeApp.cakesView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cakes', {
    templateUrl: 'views/cakes/cakes.html',
    controller: 'CakesCtrl'
  });
}])

.controller('CakesCtrl', ['$scope', 'cakeFactory', function($scope, cakeFactory) {
  $scope.cakes = {};
  cakeFactory.all().then(function(resp){
    $scope.cakes = resp.data;
  });
}]);
