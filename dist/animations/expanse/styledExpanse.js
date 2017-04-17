'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.right = exports.left = exports.down = exports.Up = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 0%;\n\t\ttransform: scale(.2) translate(0%, -200%); \n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 0%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 0%;\n\t\ttransform: scale(.2) translate(0%, -200%); \n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 0%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 100%;\n\t\ttransform: scale(.2) translate(0%, 200%);\n\t}\t\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 100%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 100%;\n\t\ttransform: scale(.2) translate(0%, 200%);\n\t}\t\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 100%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 0% 50%;\n\t\ttransform: scale(.2) translate(-200%, 0%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 0% 50%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 0% 50%;\n\t\ttransform: scale(.2) translate(-200%, 0%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 0% 50%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 100% 50%;\n\t\ttransform: scale(.2) translate(200%, 0%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 100% 50%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 100% 50%;\n\t\ttransform: scale(.2) translate(200%, 0%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 100% 50%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Up = (0, _styledComponents.keyframes)(_templateObject);

var down = (0, _styledComponents.keyframes)(_templateObject2);

var left = (0, _styledComponents.keyframes)(_templateObject3);

var right = (0, _styledComponents.keyframes)(_templateObject4);

exports.Up = Up;
exports.down = down;
exports.left = left;
exports.right = right;