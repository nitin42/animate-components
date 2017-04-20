'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.expanseRight = exports.expanseLeft = exports.expanseDown = exports.expanseUp = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 0%;\n\t\ttransform: scale(.2) translate(0%, -200%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 0%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 0%;\n\t\ttransform: scale(.2) translate(0%, -200%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 0%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 100%;\n\t\ttransform: scale(.2) translate(0%, 200%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 100%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 50% 100%;\n\t\ttransform: scale(.2) translate(0%, 200%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 50% 100%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 0% 50%;\n\t\ttransform: scale(.2) translate(-200%, 0%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 0% 50%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 0% 50%;\n\t\ttransform: scale(.2) translate(-200%, 0%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 0% 50%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 100% 50%;\n\t\ttransform: scale(.2) translate(200%, 0%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 100% 50%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n'], ['\n\t0% {\n\t\topacity: 0;\n\t\ttransform-origin: 100% 50%;\n\t\ttransform: scale(.2) translate(200%, 0%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform-origin: 100% 50%;\n\t\ttransform: scale(1) translate(0%, 0%);\n\t}\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var expanseUp = (0, _styledComponents.keyframes)(_templateObject);

var expanseDown = (0, _styledComponents.keyframes)(_templateObject2);

var expanseLeft = (0, _styledComponents.keyframes)(_templateObject3);

var expanseRight = (0, _styledComponents.keyframes)(_templateObject4);

exports.expanseUp = expanseUp;
exports.expanseDown = expanseDown;
exports.expanseLeft = expanseLeft;
exports.expanseRight = expanseRight;