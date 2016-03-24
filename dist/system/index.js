System.register(['./helpers', './topics'], function (_export) {
  'use strict';

  return {
    setters: [function (_helpers) {
      _export('Helpers', _helpers.Helpers);
    }, function (_topics) {
      _export('Topics', _topics.Topics);
    }],
    execute: function () {}
  };
});