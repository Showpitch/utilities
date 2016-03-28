System.register(['./helpers', './topics'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(config) {
    config.globalResources();
  }

  return {
    setters: [function (_helpers) {
      _export('Helpers', _helpers.Helpers);
    }, function (_topics) {
      _export('Topics', _topics.Topics);
    }],
    execute: function () {}
  };
});