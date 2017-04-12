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
		global.styledSpecial = mod.exports;
	}
})(this, function (exports, _styledComponents) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.hatch = exports.entrance = exports.expandUp = exports.pulse = exports.hinge = exports.zoom = exports.swing = exports.rubber = exports.rollIn = exports.rollOut = exports.flash = undefined;

	var _templateObject = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 1;\n\t}\n\n\t25% {\n\t\topacity: 0;\n\t}\n\n\t50% {\n\t\topacity: 1;\n\t}\n\n\t75% {\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\topacity: 1;\n\t}\n'], ['\n\tfrom {\n\t\topacity: 1;\n\t}\n\n\t25% {\n\t\topacity: 0;\n\t}\n\n\t50% {\n\t\topacity: 1;\n\t}\n\n\t75% {\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\topacity: 1;\n\t}\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n'], ['\n\tfrom {\n\t\ttransform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform: none;\n\t\topacity: 1;\n\t}\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 1;\n\t}\n\n\tto {\n\t\ttransform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n\t\topacity: 0;\n\t}\n\t\n'], ['\n\tfrom {\n\t\topacity: 1;\n\t}\n\n\tto {\n\t\ttransform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n\t\topacity: 0;\n\t}\n\t\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n\n\t30% {\n\t\ttransform: scale3d(1.25, 0.75, 1);\n\t}\n\n\t40% {\n\t\ttransform: scale3d(0.75, 1.25, 1);\n\t}\n\n\t50% {\n\t\ttransform: scale3d(1.15, 0.85, 1);\n\t}\n\n\t65% {\n\t\ttransform: scale3d(.95, 1.05, 1);\n\t}\n\n\t75% {\n\t\ttransform: scale3d(1.05, .95, 1);\n\t}\n\n\tto {\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n'], ['\n\tfrom {\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n\n\t30% {\n\t\ttransform: scale3d(1.25, 0.75, 1);\n\t}\n\n\t40% {\n\t\ttransform: scale3d(0.75, 1.25, 1);\n\t}\n\n\t50% {\n\t\ttransform: scale3d(1.15, 0.85, 1);\n\t}\n\n\t65% {\n\t\ttransform: scale3d(.95, 1.05, 1);\n\t}\n\n\t75% {\n\t\ttransform: scale3d(1.05, .95, 1);\n\t}\n\n\tto {\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n\t20% {\n\t\ttransform: rotate3d(0, 0, 1, 15deg);\n\t}\n\n\t40% {\n\t\ttransform: rotate3d(0, 0, 1, -10deg);\n\t}\n\n\t60% {\n\t\ttransform: rotate3d(0, 0, 1, 5deg);\n\t}\n\n\t80% {\n\t\ttransform: rotate3d(0, 0, 1, -5deg);\n\t}\n\n\tto {\n\t\ttransform: rotate3d(0, 0, 1, 0deg);\n\t}\n'], ['\n\t20% {\n\t\ttransform: rotate3d(0, 0, 1, 15deg);\n\t}\n\n\t40% {\n\t\ttransform: rotate3d(0, 0, 1, -10deg);\n\t}\n\n\t60% {\n\t\ttransform: rotate3d(0, 0, 1, 5deg);\n\t}\n\n\t80% {\n\t\ttransform: rotate3d(0, 0, 1, -5deg);\n\t}\n\n\tto {\n\t\ttransform: rotate3d(0, 0, 1, 0deg);\n\t}\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 0;\n\t\ttransform: scale3d(.4, .4, .4);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t}\n'], ['\n\tfrom {\n\t\topacity: 0;\n\t\ttransform: scale3d(.4, .4, .4);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t}\n']),
	    _templateObject7 = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform-origin: top-left;\n\t\tanimation-timing-function: ease-in-out;\n\t\topacity: 1;\n\t}\n\n\t20%, 40% {\n\t\ttransform-origin: top-left;\n\t\ttransform: rotate(0, 0, 1, 80deg);\n\t\tanimation-timing-function: ease-in-out;\n\t\topacity: 1;\n\t}\n\n\t60%, 80% {\n\t\ttransform-origin: top-left;\n\t\ttransform: rotate(0, 0, 1, 20deg);\n\t\tanimation-timing-function: ease-in-out;\n\t\topacity: 1;\n\t}\n\n\tto {\n\t\ttransform: translate3d(0, 700px, 0);\n\t\topacity: 0;\n\t}\n'], ['\n\tfrom {\n\t\ttransform-origin: top-left;\n\t\tanimation-timing-function: ease-in-out;\n\t\topacity: 1;\n\t}\n\n\t20%, 40% {\n\t\ttransform-origin: top-left;\n\t\ttransform: rotate(0, 0, 1, 80deg);\n\t\tanimation-timing-function: ease-in-out;\n\t\topacity: 1;\n\t}\n\n\t60%, 80% {\n\t\ttransform-origin: top-left;\n\t\ttransform: rotate(0, 0, 1, 20deg);\n\t\tanimation-timing-function: ease-in-out;\n\t\topacity: 1;\n\t}\n\n\tto {\n\t\ttransform: translate3d(0, 700px, 0);\n\t\topacity: 0;\n\t}\n']),
	    _templateObject8 = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n\n\t50% {\n\t\ttransform: scale3d(1.4, 1.4, 1.4);\n\t}\n\n\tto {\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n'], ['\n\tfrom {\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n\n\t50% {\n\t\ttransform: scale3d(1.4, 1.4, 1.4);\n\t}\n\n\tto {\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n']),
	    _templateObject9 = _taggedTemplateLiteral(['\n\t0% {\n\t\ttransform: translateY(100%) scale(0.6) scaleY(0.5);\n\t}\n\n\t60%{\n\t\ttransform: translateY(-7%) scaleY(1.12);\n\t}\n\t\n\t75%{\n\t\ttransform: translateY(3%);\n\t}\t\n\t\n\t100% {\n\t\ttransform: translateY(0%) scale(1) scaleY(1);\n\t}\n'], ['\n\t0% {\n\t\ttransform: translateY(100%) scale(0.6) scaleY(0.5);\n\t}\n\n\t60%{\n\t\ttransform: translateY(-7%) scaleY(1.12);\n\t}\n\t\n\t75%{\n\t\ttransform: translateY(3%);\n\t}\t\n\t\n\t100% {\n\t\ttransform: translateY(0%) scale(1) scaleY(1);\n\t}\n']),
	    _templateObject10 = _taggedTemplateLiteral(['\n\t0% {\n\t\ttransform: scale(0.3) rotate(6deg) translateX(-30%) translateY(30%);\n\t\topacity: 0.1;\n\t}\n\n\t30% {\n\t\ttransform: scale(1.03) rotate(-2deg) translateX(2%) translateY(-2%);\t\t\n\t\topacity: 1;\n\t}\n\t\n\t45% {\n\t\ttransform: scale(0.98);\n\t\topacity: 1;\n\t}\n\t\n\t60% {\n\t\ttransform: scale(1.01);\n\t\topacity: 1;\n\t}\t\n\t\n\t75% {\n\t\ttransform: scale(0.99);\n\t\topacity: 1;\n\t}\n\t\n\t90% {\n\t\ttransform: scale(1.01);\t\n\t\topacity: 1;\n\t}\t\n\t\n\t100% {\n\t\ttransform: scale(1);\n\t\topacity: 1;\n\t}\n'], ['\n\t0% {\n\t\ttransform: scale(0.3) rotate(6deg) translateX(-30%) translateY(30%);\n\t\topacity: 0.1;\n\t}\n\n\t30% {\n\t\ttransform: scale(1.03) rotate(-2deg) translateX(2%) translateY(-2%);\t\t\n\t\topacity: 1;\n\t}\n\t\n\t45% {\n\t\ttransform: scale(0.98);\n\t\topacity: 1;\n\t}\n\t\n\t60% {\n\t\ttransform: scale(1.01);\n\t\topacity: 1;\n\t}\t\n\t\n\t75% {\n\t\ttransform: scale(0.99);\n\t\topacity: 1;\n\t}\n\t\n\t90% {\n\t\ttransform: scale(1.01);\t\n\t\topacity: 1;\n\t}\t\n\t\n\t100% {\n\t\ttransform: scale(1);\n\t\topacity: 1;\n\t}\n']),
	    _templateObject11 = _taggedTemplateLiteral(['\n\t0% {\n\t\ttransform: scaleY(0.6);\n\t}\n\n\t20% {\n\t\ttransform: rotate(-2deg) scaleY(1.05);\n\t}\n\t\n\t35% {\n\t\ttransform: rotate(2deg) scaleY(1);\n\t}\n\t\n\t50% {\n\t\ttransform: rotate(-2deg);\n\t}\t\n\t\n\t65% {\n\t\ttransform: rotate(1deg);\n\t}\t\n\t\n\t80% {\n\t\ttransform: rotate(-1deg);\n\t}\t\t\n\t\n\t100% {\n\t\ttransform: none;\n\t}\n'], ['\n\t0% {\n\t\ttransform: scaleY(0.6);\n\t}\n\n\t20% {\n\t\ttransform: rotate(-2deg) scaleY(1.05);\n\t}\n\t\n\t35% {\n\t\ttransform: rotate(2deg) scaleY(1);\n\t}\n\t\n\t50% {\n\t\ttransform: rotate(-2deg);\n\t}\t\n\t\n\t65% {\n\t\ttransform: rotate(1deg);\n\t}\t\n\t\n\t80% {\n\t\ttransform: rotate(-1deg);\n\t}\t\t\n\t\n\t100% {\n\t\ttransform: none;\n\t}\n']);

	function _taggedTemplateLiteral(strings, raw) {
		return Object.freeze(Object.defineProperties(strings, {
			raw: {
				value: Object.freeze(raw)
			}
		}));
	}

	var flash = (0, _styledComponents.keyframes)(_templateObject);

	var rollIn = (0, _styledComponents.keyframes)(_templateObject2);

	var rollOut = (0, _styledComponents.keyframes)(_templateObject3);

	var rubber = (0, _styledComponents.keyframes)(_templateObject4);

	var swing = (0, _styledComponents.keyframes)(_templateObject5);

	var zoom = (0, _styledComponents.keyframes)(_templateObject6);

	var hinge = (0, _styledComponents.keyframes)(_templateObject7);

	var pulse = (0, _styledComponents.keyframes)(_templateObject8);

	var expandUp = (0, _styledComponents.keyframes)(_templateObject9);

	var entrance = (0, _styledComponents.keyframes)(_templateObject10);

	var hatch = (0, _styledComponents.keyframes)(_templateObject11);

	exports.flash = flash;
	exports.rollOut = rollOut;
	exports.rollIn = rollIn;
	exports.rubber = rubber;
	exports.swing = swing;
	exports.zoom = zoom;
	exports.hinge = hinge;
	exports.pulse = pulse;
	exports.expandUp = expandUp;
	exports.entrance = entrance;
	exports.hatch = hatch;
});