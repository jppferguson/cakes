'use strict';

describe('Cake View', function() {
  var scope, ctrl, cakeFactory, spy, routeParams;

  beforeEach(module('angular-md5'));
  beforeEach(module('cakeApp.cakeView'));
  beforeEach(module('cakeApp.cake-factory'));

  beforeEach(inject(function($rootScope, $controller, _cakeFactory_, $q) {
    cakeFactory = _cakeFactory_;
    routeParams = { cakeId: 'abc123' };
    spy = spyOn(cakeFactory, 'single').and.returnValue($q.when({}));
    scope = $rootScope.$new();
    ctrl = $controller('CakeCtrl', { $scope: scope, $routeParams: routeParams });
  }));

  it('should create a cakeCtrl', function() {
    expect(ctrl).toBeDefined();
  });

  it('should make a call to cakeFactory.single with the id', function() {
    expect(spy).toHaveBeenCalledWith('abc123');
  });



});
