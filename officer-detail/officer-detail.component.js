'use strict';

// Register `officerDetail` component, along with its associated controller and template
angular.
  module('officerDetail').
  component('officerDetail', {
    templateUrl: 'officer-detail/officer-detail.template.html',
    controller: ['$routeParams', 'Officer',
      function OfficerDetailController($routeParams, Officer) {
        var self = this;
        self.officer = Officer.get({officerId: $routeParams.officerId}, function(officer) {
          self.setImage(officer.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
