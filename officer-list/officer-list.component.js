'use strict';

// Register `officerList` component, along with its associated controller and template
angular.
  module('officerList').
  component('officerList', {
    templateUrl: 'officer-list/officer-list.template.html',
    controller: ['Officer',
      function OfficerListController(Officer) {
        this.officers = Officer.query();
        this.orderProp = 'age';
      }
    ]
  });
