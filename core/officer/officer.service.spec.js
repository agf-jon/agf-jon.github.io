'use strict';

describe('Officer', function() {
  var $httpBackend;
  var Officer;
  var officersData = [
    {name: 'Officer X'},
    {name: 'Officer Y'},
    {name: 'Officer Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Officer` service before each test
  beforeEach(module('core.officer'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Officer_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('officers/officers.json').respond(officersData);

    Officer = _Officer_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the officers data from `/officers/officers.json`', function() {
    var officers = Officer.query();

    expect(officers).toEqual([]);

    $httpBackend.flush();
    expect(officers).toEqual(officersData);
  });

});
