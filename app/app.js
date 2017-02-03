'use strict';

// Declare app level module which depends on views, and components
angular.module('cakeApp', [
  'ngRoute',
  'angular-md5',
  'cakeApp.rating',
  'cakeApp.cake-factory',
  'cakeApp.cakeAddView',
  'cakeApp.cakeView',
  'cakeApp.cakesView',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({ redirectTo: '/cakes' });
}]);
