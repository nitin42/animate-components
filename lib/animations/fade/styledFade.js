'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.upBig = exports.up = exports.rightBig = exports.right = exports.leftBig = exports.downBig = exports.down = exports.left = exports.fadeIn = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n  \topacity: 0;\n  }\n\n  100% {\n  \topacity: 1;\n  }\n'], ['\n  0% {\n  \topacity: 0;\n  }\n\n  100% {\n  \topacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n  \topacity: 0;\n  \t-webkit-transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n  \topacity: 1;\n  \t-webkit-transform: none;\n  }\n'], ['\n  from {\n  \topacity: 0;\n  \t-webkit-transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n  \topacity: 1;\n  \t-webkit-transform: none;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 0;\n\t \t-webkit-transform: translate3d(-2000px, 0, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n\t\n'], ['\n\tfrom {\n\t\topacity: 0;\n\t \t-webkit-transform: translate3d(-2000px, 0, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n\t\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 0;\n\t \t-webkit-transform: translate3d(100%, 0, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n\n'], ['\n\tfrom {\n\t\topacity: 0;\n\t \t-webkit-transform: translate3d(100%, 0, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 0;\n\t \t-webkit-transform: translate3d(2000px, 0, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n\n'], ['\n\tfrom {\n\t\topacity: 0;\n\t \t-webkit-transform: translate3d(2000px, 0, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, -100%, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\t\n'], ['\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, -100%, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\t\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, -2000px, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n'], ['\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, -2000px, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 100%, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n'], ['\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 100%, 0);\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 2000px, 0);\n\t}\n\t\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n'], ['\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 2000px, 0);\n\t}\n\t\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: none;\n\t}\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fadeIn = (0, _styledComponents.keyframes)(_templateObject);

var left = (0, _styledComponents.keyframes)(_templateObject2);

var leftBig = (0, _styledComponents.keyframes)(_templateObject3);

var right = (0, _styledComponents.keyframes)(_templateObject4);

var rightBig = (0, _styledComponents.keyframes)(_templateObject5);

var down = (0, _styledComponents.keyframes)(_templateObject6);

var downBig = (0, _styledComponents.keyframes)(_templateObject7);

var up = (0, _styledComponents.keyframes)(_templateObject8);

var upBig = (0, _styledComponents.keyframes)(_templateObject9);

exports.fadeIn = fadeIn;
exports.left = left;
exports.down = down;
exports.downBig = downBig;
exports.leftBig = leftBig;
exports.right = right;
exports.rightBig = rightBig;
exports.up = up;
exports.upBig = upBig;