(function () {
  'use strict';

  angular
    .module('skyAtp')
    .factory('skyAtp', skyAtp);

  /** @ngInject */
  function skyAtp ($log, $resource) {
    var api = 'http://uiapi-stage.dev.junipersecurity.net:9900/';
    return {
      ScannedCategories: $resource('/v1/skyatp/ui_api/scanned_categories/:sortby/:start_date/:end_date',
        {
          sortby: '@sort_by', //percent, name
          start_date: '@start_date',
          end_date: '@end_date'
        }),
      ScannedTypes: $resource('/v1/skyatp/ui_api/scanned_types/:sortby/:start_date/:end_date',
        {
          sortby: '@sort_by', //percent, name
          start_date: '@start_date',
          end_date: '@end_date'
        }),
      Devices: $resource('/v1/skyatp/ui_api/devices/:page/:sortby/:start_date/:end_date',
        {
          page: '@page',
          sortby: '@sort_by',
          start_date: '@start_date',
          end_date: '@end_date'
        }),
      Malware: $resource('/v1/skyatp/ui_api/malware/:page/:sortby/:start_date/:end_date',
        {
          page: '@page',
          sortby: '@sort_by',//count, percent, name
          start_date: '@start_date',
          end_date: '@end_date'
        }),
      MalwareLocations: $resource('/v1/skyatp/ui_api/malware_locations/:page/:sortby/:start_date/:end_date',
        {
          page: '@page',
          sortby: '@sort_by',//count, percent, country, continent
          start_date: '@start_date',
          end_date: '@end_date'
        }),
      InfectedCategories: $resource(api + '/v1/skyatp/ui_api/infected_categories/:sortby/:start_date/:end_date',
        {
          sortby: '@sortby',
          start_date: '@start_date',
          end_date: '@end_date'
        }),
      InfectedTypes: $resource(api + '/v1/skyatp/ui_api/:sortby/:start_date/:end_date',
        {
          sortby: '@sortby',
          start_date: '@start_date',
          end_date: '@end_date'
        })
    };

  }
})();
