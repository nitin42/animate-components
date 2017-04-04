'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledFlip = require('./styledFlip');

var _HOC = require('../HOC');

var _HOC2 = _interopRequireDefault(_HOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Flip animation components
var flipObj = {
	Flip: (0, _HOC2.default)('Flip', _styledFlip.flip),
	FlipX: (0, _HOC2.default)('FlipX', _styledFlip.flipX),
	FlipY: (0, _HOC2.default)('FlipY', _styledFlip.flipY)
};

exports.default = flipObj;