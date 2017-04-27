'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vanishout = exports.vanishin = exports.puffmein = exports.puffmeout = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    opacity: 1;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(1, 1);\n    transform: scale(1, 1);\n    -webkit-filter: blur(0px);\n    filter: blur(0px);\n  }\n\n  100% {\n    opacity: 0;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(2, 2);\n    transform: scale(2, 2);\n    -webkit-filter: blur(3px);\n    filter: blur(3px);\n  }\n'], ['\n  0% {\n    opacity: 1;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(1, 1);\n    transform: scale(1, 1);\n    -webkit-filter: blur(0px);\n    filter: blur(0px);\n  }\n\n  100% {\n    opacity: 0;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(2, 2);\n    transform: scale(2, 2);\n    -webkit-filter: blur(3px);\n    filter: blur(3px);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(2, 2);\n    transform: scale(2, 2);\n    -webkit-filter: blur(3px);\n    filter: blur(3px);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(1, 1);\n    transform: scale(1, 1);\n    -webkit-filter: blur(0px);\n    filter: blur(0px);\n  }\n'], ['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(2, 2);\n    transform: scale(2, 2);\n    -webkit-filter: blur(3px);\n    filter: blur(3px);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(1, 1);\n    transform: scale(1, 1);\n    -webkit-filter: blur(0px);\n    filter: blur(0px);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0% {\n    opacity: 1;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(1, 1);\n    transform: scale(1, 1);\n    -webkit-filter: blur(0px);\n    filter: blur(0px);\n  }\n\n  100% {\n    opacity: 0;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(2, 2);\n    transform: scale(2, 2);\n    -webkit-filter: blur(18px);\n    filter: blur(18px);\n  }\n'], ['\n  0% {\n    opacity: 1;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(1, 1);\n    transform: scale(1, 1);\n    -webkit-filter: blur(0px);\n    filter: blur(0px);\n  }\n\n  100% {\n    opacity: 0;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(2, 2);\n    transform: scale(2, 2);\n    -webkit-filter: blur(18px);\n    filter: blur(18px);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(2, 2);\n    transform: scale(2, 2);\n    -webkit-filter: blur(18px);\n    filter: blur(18px);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(1, 1);\n    transform: scale(1, 1);\n    -webkit-filter: blur(0px);\n    filter: blur(0px);\n  }\n'], ['\n  0% {\n    opacity: 0;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(2, 2);\n    transform: scale(2, 2);\n    -webkit-filter: blur(18px);\n    filter: blur(18px);\n  }\n\n  100% {\n    opacity: 1;\n    -ms-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -ms-transform: scale(1, 1);\n    transform: scale(1, 1);\n    -webkit-filter: blur(0px);\n    filter: blur(0px);\n  }\n']);

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