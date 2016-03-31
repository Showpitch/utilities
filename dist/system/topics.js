'use strict';

System.register([], function (_export, _context) {
  var Topics;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Topics', Topics = function Topics() {
        _classCallCheck(this, Topics);

        this.config = {
          environment: 'topics_config_environment'
        };
        this.imageCropper = {
          file: 'temp_topic_image_cropper_file'
        };
      });

      _export('Topics', Topics);
    }
  };
});