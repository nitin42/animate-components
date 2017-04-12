(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', 'styled-components'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('styled-components'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.styledComponents);
		global.styledLight = mod.exports;
	}
})(this, function (exports, _styledComponents) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.lightOut = exports.lightIn = undefined;

	var _templateObject = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform: translate3d(100%, 0, 0) skew(-30deg);\n\t\topacity: 0;\n\t}\n\n\t40% {\n\t\ttransform: skew(20deg);\n\t\topacity: 1;\n\t}\n\n\t80% {\n\t\ttransform: skew(-5deg);\n\t\topacity: 1;\n\t}\n\n\tto {\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n'], ['\n\tfrom {\n\t\ttransform: translate3d(100%, 0, 0) skew(-30deg);\n\t\topacity: 0;\n\t}\n\n\t40% {\n\t\ttransform: skew(20deg);\n\t\topacity: 1;\n\t}\n\n\t80% {\n\t\ttransform: skew(-5deg);\n\t\topacity: 1;\n\t}\n\n\tto {\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 1;\n\t}\n\t\n\tto {\n\t\ttransform: translate3d(100%, 0, 0) skew(30deg);\n\t\topacity: 0;\n\t}\n'], ['\n\tfrom {\n\t\topacity: 1;\n\t}\n\t\n\tto {\n\t\ttransform: translate3d(100%, 0, 0) skew(30deg);\n\t\topacity: 0;\n\t}\n']);

	function _taggedTemplateLiteral(strings, raw) {
		return Object.freeze(Object.defineProperties(strings, {
			raw: {
				value: Object.freeze(raw)
			}
		}));
	}

	var lightIn = (0, _styledComponents.keyframes)(_templateObject);

	var lightOut = (0, _styledComponents.keyframes)(_templateObject2);

	exports.lightIn = lightIn;
	exports.lightOut = lightOut;
});