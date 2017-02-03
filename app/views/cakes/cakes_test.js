'use strict';

describe('Cakes View', function() {
  var scope, ctrl, cakeFactory, spy;

  beforeEach(module('angular-md5'));
  beforeEach(module('cakeApp.cakesView'));
  beforeEach(module('cakeApp.cake-factory'));

  beforeEach(inject(function($rootScope, $controller, _cakeFactory_, $q) {
    cakeFactory = _cakeFactory_;
    spy = spyOn(cakeFactory, 'all').and.returnValue($q.when({}));
    scope = $rootScope.$new();
    ctrl = $controller('CakesCtrl', {$scope: scope});
  }));

  it('should create a cakesCtrl', function() {
    expect(ctrl).toBeDefined();
  });

  it('should make a call to cakeFactory.all to get all cakes', function() {
    expect(spy).toHaveBeenCalled();
  });

});
