'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightOut = exports.lightIn = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(100%, 0, 0) skew(-30deg);\n    opacity: 0;\n  }\n\n  40% {\n    -ms-transform: skew(20deg);\n    transform: skew(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -ms-transform: skew(-5deg);\n    transform: skew(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform: translate3d(100%, 0, 0) skew(-30deg);\n    opacity: 0;\n  }\n\n  40% {\n    -ms-transform: skew(20deg);\n    transform: skew(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -ms-transform: skew(-5deg);\n    transform: skew(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skew(30deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skew(30deg);\n    opacity: 0;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var lightIn = (0, _styledComponents.keyframes)(_templateObject);

var lightOut = (0, _styledComponents.keyframes)(_templateObject2);

exports.lightIn = lightIn;
exports.lightOut = lightOut;