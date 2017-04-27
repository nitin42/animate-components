'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateUpRight = exports.rotateUpLeft = exports.rotateRight = exports.rotateLeft = exports.rotateIn = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    -ms-transform-origin: center;\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    -ms-transform-origin: center;\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  from {\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  from {\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  from {\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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