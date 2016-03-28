'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var Topics = (function () {
  function Topics() {
    _classCallCheck(this, _Topics);
  }

  _createClass(Topics, null, [{
    key: 'config',
    value: {
      environment: 'topics_config_environment'
    },
    enumerable: true
  }]);

  var _Topics = Topics;
  Topics = (0, _aureliaFramework.noView)(Topics) || Topics;
  return Topics;
})();

exports.Topics = Topics;