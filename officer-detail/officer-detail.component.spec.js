'use strict';

describe('officerDetail', function() {

  // Load the module that contains the `officerDetail` component before each test
  beforeEach(module('officerDetail'));

  // Test the controller
  describe('OfficerDetailController', function() {
    var $httpBackend, ctrl;
    var xyzOfficerData = {
      name: 'officer xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('officers/xyz.json').respond(xyzOfficerData);

      $routeParams.officerId = 'xyz';

      ctrl = $componentController('officerDetail');
    }));

    it('should fetch the officer details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.officer).toEqual({});

      $httpBackend.flush();
      expect(ctrl.officer).toEqual(xyzOfficerData);
    });

  });

});
