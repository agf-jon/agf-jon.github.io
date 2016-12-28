'use strict';

describe('officerList', function() {

  // Load the module that contains the `officerList` component before each test
  beforeEach(module('officerList'));

  // Test the controller
  describe('OfficerListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('officers/officers.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('officerList');
    }));

    it('should create a `officers` property with 2 officers fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.officers).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.officers).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
