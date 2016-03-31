'use strict';

System.register(['./helpers', './topics'], function (_export, _context) {
  return {
    setters: [function (_helpers) {
      var _exportObj = {};
      _exportObj.Helpers = _helpers.Helpers;

      _export(_exportObj);
    }, function (_topics) {
      var _exportObj2 = {};
      _exportObj2.Topics = _topics.Topics;

      _export(_exportObj2);
    }],
    execute: function () {
      function configure(config) {
        config.globalResources();
      }

      _export('configure', configure);
    }
  };
});