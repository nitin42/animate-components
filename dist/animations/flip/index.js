(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './styledFlip', '../HOC'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./styledFlip'), require('../HOC'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.styledFlip, global.HOC);
		global.index = mod.exports;
	}
})(this, function (exports, _styledFlip, _HOC) {
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

	// Flip animation components
	var flipObj = {
		Flip: (0, _HOC2.default)('Flip', _styledFlip.flip),
		FlipX: (0, _HOC2.default)('FlipX', _styledFlip.flipX),
		FlipY: (0, _HOC2.default)('FlipY', _styledFlip.flipY)
	};

	exports.default = flipObj;
});