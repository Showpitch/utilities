define(['exports', './helpers', './topics'], function (exports, _helpers, _topics) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;
  Object.defineProperty(exports, 'Helpers', {
    enumerable: true,
    get: function get() {
      return _helpers.Helpers;
    }
  });
  Object.defineProperty(exports, 'Topics', {
    enumerable: true,
    get: function get() {
      return _topics.Topics;
    }
  });

  function configure(config) {
    config.globalResources();
  }
});