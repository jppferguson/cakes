'use strict';

angular.module('cakeApp.cakeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cakes/:cakeId', {
    templateUrl: 'views/cake/cake.html',
    controller: 'CakeCtrl'
  });
}])

.controller('CakeCtrl', ['$scope', 'cakeFactory', '$routeParams', function($scope, cakeFactory, $routeParams) {
  cakeFactory.single($routeParams.cakeId).then(function(resp){
    $scope.cake = resp.data;
  })
}]);
