'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideRight = exports.slideLeft = exports.slideUp = exports.slideDown = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var slideDown = (0, _styledComponents.keyframes)(_templateObject);

var slideUp = (0, _styledComponents.keyframes)(_templateObject2);

var slideLeft = (0, _styledComponents.keyframes)(_templateObject3);

var slideRight = (0, _styledComponents.keyframes)(_templateObject4);

exports.slideDown = slideDown;
exports.slideUp = slideUp;
exports.slideLeft = slideLeft;
exports.slideRight = slideRight;