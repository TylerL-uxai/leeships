import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './footer.html';

class LocationFooterCtrl {
  constructor($scope, $state, $reactive) {
    'ngInject';
  }

}

const name = 'locationFooter';

export default angular.module(name, [angularMeteor])
.component(name, {
  template,
  controllerAs: name,
  controller: LocationFooterCtrl
});
