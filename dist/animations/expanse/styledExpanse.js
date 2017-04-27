'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expanseRight = exports.expanseLeft = exports.expanseDown = exports.expanseUp = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -ms-transform: scale(.2) translate(0%, -200%);\n    transform: scale(.2) translate(0%, -200%);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -ms-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n'], ['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -ms-transform: scale(.2) translate(0%, -200%);\n    transform: scale(.2) translate(0%, -200%);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -ms-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -ms-transform: scale(.2) translate(0%, 200%);\n    transform: scale(.2) translate(0%, 200%);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -ms-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n'], ['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -ms-transform: scale(.2) translate(0%, 200%);\n    transform: scale(.2) translate(0%, 200%);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -ms-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -ms-transform: scale(.2) translate(-200%, 0%);\n    transform: scale(.2) translate(-200%, 0%);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -ms-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n'], ['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -ms-transform: scale(.2) translate(-200%, 0%);\n    transform: scale(.2) translate(-200%, 0%);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -ms-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -ms-transform: scale(.2) translate(200%, 0%);\n    transform: scale(.2) translate(200%, 0%);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -ms-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n'], ['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -ms-transform: scale(.2) translate(200%, 0%);\n    transform: scale(.2) translate(200%, 0%);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -ms-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n']);

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