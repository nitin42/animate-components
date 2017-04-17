'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.left = exports.right = exports.up = exports.down = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    transform-origin: 0 100%;\n    transform: perspective(800px) rotateX(0deg);\n  }\n\n  100% {\n    transform-origin: 0 100%;\n    transform: perspective(800px) rotateX(-180deg);\n  }\n'], ['\n  0% {\n    transform-origin: 0 100%;\n    transform: perspective(800px) rotateX(0deg);\n  }\n\n  100% {\n    transform-origin: 0 100%;\n    transform: perspective(800px) rotateX(-180deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateX(0deg);\n  }\n\n  100% {\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateX(180deg);\n  }\n'], ['\n  0% {\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateX(0deg);\n  }\n\n  100% {\n    transform-origin: 0 0;\n    transform: perspective(800px) rotateX(180deg);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t0% {\n\t\ttransform-origin: 100% 0;\n\t\ttransform: perspective(800px) rotateY(0deg);\n\t}\n\n\t100% {\n\t\ttransform-origin: 100% 0;\n\t\ttransform: perspective(800px) rotateY(180deg);\n\t}\n'], ['\n\t0% {\n\t\ttransform-origin: 100% 0;\n\t\ttransform: perspective(800px) rotateY(0deg);\n\t}\n\n\t100% {\n\t\ttransform-origin: 100% 0;\n\t\ttransform: perspective(800px) rotateY(180deg);\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t0% {\n\t\ttransform-origin: 0 0;\n\t\ttransform: perspective(800px) rotateY(0deg);\n\t}\n\n\t100% {\n\t\ttransform-origin: 0 0;\n\t\ttransform: perspective(800px) rotateY(-180deg);\n\t}\n'], ['\n\t0% {\n\t\ttransform-origin: 0 0;\n\t\ttransform: perspective(800px) rotateY(0deg);\n\t}\n\n\t100% {\n\t\ttransform-origin: 0 0;\n\t\ttransform: perspective(800px) rotateY(-180deg);\n\t}\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var down = (0, _styledComponents.keyframes)(_templateObject);

var up = (0, _styledComponents.keyframes)(_templateObject2);

var right = (0, _styledComponents.keyframes)(_templateObject3);

var left = (0, _styledComponents.keyframes)(_templateObject4);

exports.down = down;
exports.up = up;
exports.right = right;
exports.left = left;