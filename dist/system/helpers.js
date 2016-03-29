System.register([], function (_export) {
  "use strict";

  var Helpers;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Helpers = (function () {
        function Helpers() {
          _classCallCheck(this, Helpers);
        }

        _createClass(Helpers, [{
          key: "generateGUID",
          value: function generateGUID() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (a) {
              return (a ^ Math.random() * 16 >> a / 4).toString(16);
            });
          }
        }]);

        return Helpers;
      })();

      _export("Helpers", Helpers);
    }
  };
});