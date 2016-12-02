(function() {
  'use strict';

  angular
    .module('skyAtp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(SkyAtpAPI) {
    var vm = this;
    vm.test = SkyAtpAPI.InfectedCategories.get({id: 1});
  }
})();
