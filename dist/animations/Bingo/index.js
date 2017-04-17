'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledBingo = require('./styledBingo');

var _HOC = require('../HOC');

var _HOC2 = _interopRequireDefault(_HOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bingoObj = {
	PuffOut: (0, _HOC2.default)('PuffOut', _styledBingo.puffmeout),
	PuffIn: (0, _HOC2.default)('PuffIn', _styledBingo.puffmein),
	VanishOut: (0, _HOC2.default)('VanishOut', _styledBingo.vanishout),
	VanishIn: (0, _HOC2.default)('VanishIn', _styledBingo.vanishin)
};

exports.default = bingoObj;