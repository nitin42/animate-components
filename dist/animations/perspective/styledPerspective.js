'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perspectiveLeft = exports.perspectiveRight = exports.perspectiveUp = exports.perspectiveDown = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    -ms-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n    transform: perspective(800px) rotateX(0deg);\n  }\n\n  100% {\n    -ms-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n    transform: perspective(800px) rotateX(-180deg);\n  }\n'], ['\n  0% {\n    -ms-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n    transform: perspective(800px) rotateX(0deg);\n  }\n\n  100% {\n    -ms-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n    transform: perspective(800px) rotateX(-180deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateX(0deg);\n  }\n\n  100% {\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateX(180deg);\n  }\n'], ['\n  0% {\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateX(0deg);\n  }\n\n  100% {\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateX(180deg);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0% {\n    -ms-transform-origin: 100% 0;\n    transform-origin: 100% 0;\n    transform: perspective(800px) rotateY(0deg);\n  }\n\n  100% {\n    -ms-transform-origin: 100% 0;\n    transform-origin: 100% 0;\n    transform: perspective(800px) rotateY(180deg);\n  }\n'], ['\n  0% {\n    -ms-transform-origin: 100% 0;\n    transform-origin: 100% 0;\n    transform: perspective(800px) rotateY(0deg);\n  }\n\n  100% {\n    -ms-transform-origin: 100% 0;\n    transform-origin: 100% 0;\n    transform: perspective(800px) rotateY(180deg);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  0% {\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateY(0deg);\n  }\n\n  100% {\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateY(-180deg);\n  }\n'], ['\n  0% {\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateY(0deg);\n  }\n\n  100% {\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateY(-180deg);\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var perspectiveDown = (0, _styledComponents.keyframes)(_templateObject);

var perspectiveUp = (0, _styledComponents.keyframes)(_templateObject2);

var perspectiveRight = (0, _styledComponents.keyframes)(_templateObject3);

var perspectiveLeft = (0, _styledComponents.keyframes)(_templateObject4);

exports.perspectiveDown = perspectiveDown;
exports.perspectiveUp = perspectiveUp;
exports.perspectiveRight = perspectiveRight;
exports.perspectiveLeft = perspectiveLeft;