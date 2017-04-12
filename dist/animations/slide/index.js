(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './styledSlide', '../HOC'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./styledSlide'), require('../HOC'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledSlide, global.HOC);
    global.index = mod.exports;
  }
})(this, function (exports, _styledSlide, _HOC) {
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

  var slideObj = {
    SlideUp: (0, _HOC2.default)('SlideUp', _styledSlide.slideUp),
    SlideDown: (0, _HOC2.default)('SlideDown', _styledSlide.slideDown),
    SlideRight: (0, _HOC2.default)('SlideRight', _styledSlide.slideRight),
    SlideLeft: (0, _HOC2.default)('SlideLeft', _styledSlide.slideLeft)
  };

  exports.default = slideObj;
});