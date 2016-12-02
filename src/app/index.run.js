(function() {
  'use strict';

  angular
    .module('skyAtp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
