'use strict';

angular.module('Conceptum').factory('ApiService', function ($window, $http, API_ENDPOINT) {

  var _api     = API_ENDPOINT;
  var endpoint = _api.port ? (_api.host + ':' + _api.port + _api.path) : (_api.host + _api.path);

  // activate for basic auth
  if (_api.needsAuth) {
    $http.defaults.headers.common.Authorization = 'Basic ' + $window.btoa(_api.username + ':' + _api.password);
  }

  // public api
  return {
    getEndpoint: function () {
      return endpoint;
    }
  };

});

