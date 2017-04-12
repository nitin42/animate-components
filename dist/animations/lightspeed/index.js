(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './styledLight', '../HOC'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./styledLight'), require('../HOC'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.styledLight, global.HOC);
		global.index = mod.exports;
	}
})(this, function (exports, _styledLight, _HOC) {
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

	// Lightspeed animation components
	var lightObj = {
		LightIn: (0, _HOC2.default)('LightIn', _styledLight.lightIn),
		LightOut: (0, _HOC2.default)('LightOut', _styledLight.lightOut)
	};

	exports.default = lightObj;
});