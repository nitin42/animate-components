'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledRotate = require('./styledRotate');

var _HOC = require('../HOC');

var _HOC2 = _interopRequireDefault(_HOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rotating animation components
var rotateObj = {
  RotateIn: (0, _HOC2.default)('RotateIn', _styledRotate.rotateIn),
  RotateLeft: (0, _HOC2.default)('RotateLeft', _styledRotate.rotateLeft),
  RotateRight: (0, _HOC2.default)('RotateRight', _styledRotate.rotateRight),
  RotateUpLeft: (0, _HOC2.default)('RotateUpLeft', _styledRotate.rotateUpLeft),
  RotateUpRight: (0, _HOC2.default)('RotateUpRight', _styledRotate.rotateUpRight)
};

exports.default = rotateObj;