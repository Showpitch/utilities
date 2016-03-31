define(['exports', './helpers', './topics'], function (exports, _helpers, _topics) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Helpers', {
    enumerable: true,
    get: function () {
      return _helpers.Helpers;
    }
  });
  Object.defineProperty(exports, 'Topics', {
    enumerable: true,
    get: function () {
      return _topics.Topics;
    }
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources();
  }
});