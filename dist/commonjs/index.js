'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

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

function configure(config) {
  config.globalResources('./helpers', './topics');
}