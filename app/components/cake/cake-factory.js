'use strict'
var apiEndpoint = 'http://52.31.91.48:5000/api/';

angular.module('cakeApp.cake-factory', [])

.factory('cakeFactory', ['$http', 'md5', function($http, md5) {

  return {
    // get all cakes
    all: function() {
      return $http.get( apiEndpoint + 'cakes' );
    },
    // get single cake
    single: function(id) {
      return $http.get( apiEndpoint + 'cakes/' + id );
    },
    // add a new cake
    add: function(payload, id) {
      id = id || md5.createHash(JSON.stringify(payload));
      payload.id = id;
      return $http.post( apiEndpoint + 'cakes', payload);
    }
  }
}]);
