'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledSlide = require('./styledSlide');

var _HOC = require('../HOC');

var _HOC2 = _interopRequireDefault(_HOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slideObj = {
  SlideUp: (0, _HOC2.default)('SlideUp', _styledSlide.slideUp),
  SlideDown: (0, _HOC2.default)('SlideDown', _styledSlide.slideDown),
  SlideRight: (0, _HOC2.default)('SlideRight', _styledSlide.slideRight),
  SlideLeft: (0, _HOC2.default)('SlideLeft', _styledSlide.slideLeft)
};

exports.default = slideObj;