System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(config) {
    config.globalResources('./notification/notification');
  }

  return {
    setters: [],
    execute: function () {}
  };
});