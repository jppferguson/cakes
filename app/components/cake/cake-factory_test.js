'use strict';

var apiEndpoint = 'http://52.31.91.48:5000/api/';
var cakeMock = {'id':'id123','name':'Name','comment':'Comment','imageUrl':'http://eg.com/img.jpg','yumFactor':1};

describe('Cake Factory', function() {

  beforeEach(module('cakeApp.cake-factory'));
  beforeEach(module('angular-md5'));

  var md5;
  var cakeFactory;
  var $httpBackend;

  beforeEach(inject(function(_cakeFactory_, _$httpBackend_, _md5_) {
    cakeFactory = _cakeFactory_;
    $httpBackend = _$httpBackend_;
    md5 = _md5_;
  }));


  describe('all', function() {

    beforeEach(function() {
      $httpBackend.expectGET(apiEndpoint + 'cakes')
      .respond(200, [cakeMock]);

      cakeFactory.all();
      $httpBackend.flush();
    });

    it('should send an HTTP GET request', function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

  });


  describe('single', function() {

    beforeEach(function() {
      $httpBackend.expectGET(apiEndpoint + 'cakes/id123')
      .respond(200, cakeMock);

      cakeFactory.single('id123');
      $httpBackend.flush();
    });

    it('should send an HTTP GET request', function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

  });

  describe('add', function() {

    beforeEach(function() {
      var payload = cakeMock;
      $httpBackend.expectPOST(apiEndpoint + 'cakes', payload)
      .respond(200, cakeMock);

      cakeFactory.add(payload);
      $httpBackend.flush();
    });

    it('should send an HTTP POST request with the payload', function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

  });

});
