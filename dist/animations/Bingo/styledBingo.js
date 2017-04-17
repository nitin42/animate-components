'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.vanishout = exports.vanishin = exports.puffmein = exports.puffmeout = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(1, 1);\n\t\tfilter: blur(0px);\n\t}\n\n\t100% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(2, 2);\n\t\tfilter: blur(3px);\n\t}\n'], ['\n\t0% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(1, 1);\n\t\tfilter: blur(0px);\n\t}\n\n\t100% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(2, 2);\n\t\tfilter: blur(3px);\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(2, 2);\n\t\tfilter: blur(3px);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(1, 1);\n\t\tfilter: blur(0px);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(2, 2);\n\t\tfilter: blur(3px);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(1, 1);\n\t\tfilter: blur(0px);\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(1, 1);\n\t\tfilter: blur(0px);\n\t}\n\n\t100% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(2, 2);\n\t\tfilter: blur(18px);\n\t}\n'], ['\n\t0% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(1, 1);\n\t\tfilter: blur(0px);\n\t}\n\n\t100% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(2, 2);\n\t\tfilter: blur(18px);\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(2, 2);\n\t\tfilter: blur(18px);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(1, 1);\n\t\tfilter: blur(0px);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(2, 2);\n\t\tfilter: blur(18px);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: scale(1, 1);\n\t\tfilter: blur(0px);\n\t}\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var puffmeout = (0, _styledComponents.keyframes)(_templateObject);

var puffmein = (0, _styledComponents.keyframes)(_templateObject2);

var vanishout = (0, _styledComponents.keyframes)(_templateObject3);

var vanishin = (0, _styledComponents.keyframes)(_templateObject4);

exports.puffmeout = puffmeout;
exports.puffmein = puffmein;
exports.vanishin = vanishin;
exports.vanishout = vanishout;