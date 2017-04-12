(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './styledRotate', '../HOC'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./styledRotate'), require('../HOC'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledRotate, global.HOC);
    global.index = mod.exports;
  }
})(this, function (exports, _styledRotate, _HOC) {
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

  // Rotating animation components
  var rotateObj = {
    RotateIn: (0, _HOC2.default)('RotateIn', _styledRotate.rotateIn),
    RotateLeft: (0, _HOC2.default)('RotateLeft', _styledRotate.rotateLeft),
    RotateRight: (0, _HOC2.default)('RotateRight', _styledRotate.rotateRight),
    RotateUpLeft: (0, _HOC2.default)('RotateUpLeft', _styledRotate.rotateUpLeft),
    RotateUpRight: (0, _HOC2.default)('RotateUpRight', _styledRotate.rotateUpRight)
  };

  exports.default = rotateObj;
});