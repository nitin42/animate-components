'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bounceRight = exports.bounceLeft = exports.bounceUp = exports.bounceDown = exports.bounce = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  80% {\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n'], ['\n  from {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  80% {\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  60% {\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  60% {\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  from {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  60% {\n    transform: translate3d(0, -25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  } \n'], ['\n  from {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  60% {\n    transform: translate3d(0, -25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  } \n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  from, 60% 75% 90%, to {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  } \n'], ['\n  from, 60% 75% 90%, to {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  } \n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  from, 60% 75% 90%, to {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  } \n'], ['\n  from, 60% 75% 90%, to {\n    animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  } \n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var bounce = (0, _styledComponents.keyframes)(_templateObject);

var bounceDown = (0, _styledComponents.keyframes)(_templateObject2);

var bounceUp = (0, _styledComponents.keyframes)(_templateObject3);

var bounceLeft = (0, _styledComponents.keyframes)(_templateObject4);

var bounceRight = (0, _styledComponents.keyframes)(_templateObject5);

exports.bounce = bounce;
exports.bounceDown = bounceDown;
exports.bounceUp = bounceUp;
exports.bounceLeft = bounceLeft;
exports.bounceRight = bounceRight;