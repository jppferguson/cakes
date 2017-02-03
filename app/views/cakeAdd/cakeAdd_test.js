'use strict';

describe('Cake Add', function() {
  var scope, ctrl, cakeFactory, spy, payloadMock;

  beforeEach(module('angular-md5'));
  beforeEach(module('cakeApp.cakeAddView'));
  beforeEach(module('cakeApp.cake-factory'));

  beforeEach(inject(function($rootScope, $controller, _cakeFactory_, $q) {
    payloadMock = {'id':'id12dd3','name':'Name','comment':'Comment','imageUrl':'http://eg.com/img.jpg','yumFactor':1};
    cakeFactory = _cakeFactory_;
    spy = spyOn(cakeFactory, 'add').and.returnValue($q.when({}));
    scope = $rootScope.$new();
    ctrl = $controller('CakeAddCtrl', { $scope: scope });
    scope.newCake = payloadMock;
  }));

  it('should create a CakeAddCtrl', function() {
    expect(ctrl).toBeDefined();
  });

  it('should call cakeFactory.add to add a new cake on submit', function() {
    scope.submit();
    expect(spy).toHaveBeenCalledWith(payloadMock);
  });

});
