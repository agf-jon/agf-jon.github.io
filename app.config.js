'use strict';

angular.
  module('officercatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/officers', {
          template: '<officer-list></officer-list>'
        }).
        when('/officers/:officerId', {
          template: '<officer-detail></officer-detail>'
        }).
        otherwise('/officers');
    }
  ]);
