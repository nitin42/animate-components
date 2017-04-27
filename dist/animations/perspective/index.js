'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledPerspective = require('./styledPerspective');

var _HOC = require('../HOC');

var _HOC2 = _interopRequireDefault(_HOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PObj = {
  PDown: (0, _HOC2.default)('PDown', _styledPerspective.perspectiveDown),
  PUp: (0, _HOC2.default)('PUp', _styledPerspective.perspectiveUp),
  PRight: (0, _HOC2.default)('PRight', _styledPerspective.perspectiveRight),
  PLeft: (0, _HOC2.default)('PLeft', _styledPerspective.perspectiveLeft)
};

exports.default = PObj;