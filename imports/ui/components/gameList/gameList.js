import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Games } from '../../../api/games';

import template from './gameList.html';

class GameList {
  constructor($reactive, $scope) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('games.all');

    this.helpers({
      games() {
        return Games.find({});
      }
    });
  }
}

const name = 'gameList';

export default angular.module(name, [angularMeteor])
.component(name, {
  template,
  controllerAs: name,
  controller: GameList
});