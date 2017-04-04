'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledLight = require('./styledLight');

var _HOC = require('../HOC');

var _HOC2 = _interopRequireDefault(_HOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Lightspeed animation components
var lightObj = {
	LightIn: (0, _HOC2.default)('LightIn', _styledLight.lightIn),
	LightOut: (0, _HOC2.default)('LightOut', _styledLight.lightOut)
};

exports.default = lightObj;