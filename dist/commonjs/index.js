'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('./helpers');

Object.defineProperty(exports, 'Helpers', {
  enumerable: true,
  get: function get() {
    return _helpers.Helpers;
  }
});

var _topics = require('./topics');

Object.defineProperty(exports, 'Topics', {
  enumerable: true,
  get: function get() {
    return _topics.Topics;
  }
});
exports.configure = configure;
function configure(config) {
  config.globalResources();
}