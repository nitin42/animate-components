'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledBounce = require('./styledBounce');

var _HOC = require('../HOC');

var _HOC2 = _interopRequireDefault(_HOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bounce animation components
var bounceObj = {
	Bounce: (0, _HOC2.default)('Bounce', _styledBounce.bounce),
	BounceDown: (0, _HOC2.default)('BounceDown', _styledBounce.bounceDown),
	BounceUp: (0, _HOC2.default)('BounceUp', _styledBounce.bounceUp),
	BounceLeft: (0, _HOC2.default)('BounceLeft', _styledBounce.bounceLeft),
	BounceRight: (0, _HOC2.default)('BounceRight', _styledBounce.bounceRight)
};

exports.default = bounceObj;