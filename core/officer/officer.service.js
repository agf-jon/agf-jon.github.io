'use strict';

angular.
  module('core.officer').
  factory('Officer', ['$resource',
    function($resource) {
      return $resource('officers/:officerId.json', {}, {
        query: {
          method: 'GET',
          params: {officerId: 'officers'},
          isArray: true
        }
      });
    }
  ]);
