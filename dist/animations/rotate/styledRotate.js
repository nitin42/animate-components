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
		global.styledRotate = mod.exports;
	}
})(this, function (exports, _styledComponents) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.rotateUpRight = exports.rotateUpLeft = exports.rotateRight = exports.rotateLeft = exports.rotateIn = undefined;

	var _templateObject = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform-origin: center;\n\t\ttransform: rotate3d(0, 0, 1, -200deg);\n\t\topacity: 0; \n\t}\n\n\tto {\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n'], ['\n\tfrom {\n\t\ttransform-origin: center;\n\t\ttransform: rotate3d(0, 0, 1, -200deg);\n\t\topacity: 0; \n\t}\n\n\tto {\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform-origin: left bottom;\n\t\ttransform: rotate3d(0, 0, 1, -45deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform-origin: left bottom;\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n'], ['\n\tfrom {\n\t\ttransform-origin: left bottom;\n\t\ttransform: rotate3d(0, 0, 1, -45deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform-origin: left bottom;\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform-origin: right bottom;\n\t\ttransform: rotate3d(0, 0, 1, 45deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform-origin: right bottom;\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n'], ['\n\tfrom {\n\t\ttransform-origin: right bottom;\n\t\ttransform: rotate3d(0, 0, 1, 45deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform-origin: right bottom;\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform-origin: left bottom;\n\t\ttransform: rotate3d(0, 0, 1, 45deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform-origin: left bottom;\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n'], ['\n\tfrom {\n\t\ttransform-origin: left bottom;\n\t\ttransform: rotate3d(0, 0, 1, 45deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform-origin: left bottom;\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform-origin: right bottom;\n\t\ttransform: rotate3d(0, 0, 1, -45deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform-origin: right bottom;\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n'], ['\n\tfrom {\n\t\ttransform-origin: right bottom;\n\t\ttransform: rotate3d(0, 0, 1, -45deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform-origin: right bottom;\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n']);

	function _taggedTemplateLiteral(strings, raw) {
		return Object.freeze(Object.defineProperties(strings, {
			raw: {
				value: Object.freeze(raw)
			}
		}));
	}

	var rotateIn = (0, _styledComponents.keyframes)(_templateObject);

	var rotateLeft = (0, _styledComponents.keyframes)(_templateObject2);

	var rotateRight = (0, _styledComponents.keyframes)(_templateObject3);

	var rotateUpLeft = (0, _styledComponents.keyframes)(_templateObject4);

	var rotateUpRight = (0, _styledComponents.keyframes)(_templateObject5);

	exports.rotateIn = rotateIn;
	exports.rotateLeft = rotateLeft;
	exports.rotateRight = rotateRight;
	exports.rotateUpLeft = rotateUpLeft;
	exports.rotateUpRight = rotateUpRight;
});