(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './styledBounce', '../HOC'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./styledBounce'), require('../HOC'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledBounce, global.HOC);
    global.index = mod.exports;
  }
})(this, function (exports, _styledBounce, _HOC) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _HOC2 = _interopRequireDefault(_HOC);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // Bounce animation components
  var bounceObj = {
    Bounce: (0, _HOC2.default)('Bounce', _styledBounce.bounce),
    BounceDown: (0, _HOC2.default)('BounceDown', _styledBounce.bounceDown),
    BounceUp: (0, _HOC2.default)('BounceUp', _styledBounce.bounceUp),
    BounceLeft: (0, _HOC2.default)('BounceLeft', _styledBounce.bounceLeft),
    BounceRight: (0, _HOC2.default)('BounceRight', _styledBounce.bounceRight)
  };

  exports.default = bounceObj;
});