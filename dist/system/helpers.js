"use strict";

System.register([], function (_export, _context) {
  var Helpers;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("Helpers", Helpers = function () {
        function Helpers() {
          _classCallCheck(this, Helpers);
        }

        Helpers.prototype.generateGUID = function generateGUID() {
          return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (a) {
            return (a ^ Math.random() * 16 >> a / 4).toString(16);
          });
        };

        return Helpers;
      }());

      _export("Helpers", Helpers);
    }
  };
});