define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Topics = function Topics() {
    _classCallCheck(this, Topics);

    this.config = {
      environment: 'topics_config_environment'
    };
    this.imageCropper = {
      file: 'temp_topic_image_cropper_file'
    };
  };

  exports.Topics = Topics;
});