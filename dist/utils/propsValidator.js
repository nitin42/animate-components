"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.children = exports.verifyTags = exports.hocValidators = exports.validators = undefined;

var _react = require("react");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _htmlTags = require("html-tags");

var _htmlTags2 = _interopRequireDefault(_htmlTags);

var _mergeValidators = require("./mergeValidators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Prop Validator
*/
var validators = {
  prop: _propTypes2.default.objectOf(function (propValue, key, componentName, location, propFullName) {
    (0, _mergeValidators.names)(key, propValue);
    (0, _mergeValidators.duration)(key, propValue);
    (0, _mergeValidators.timingFunction)(key, propValue);
    (0, _mergeValidators.propValidators)(key);
  })
};

/**
  Props validators for High Order Component
*/
var hocValidators = {
  direction: _propTypes2.default.oneOf(["normal", "reverse", "alternate", "alternate-reverse", "initial", "inherit"]),
  fillMode: _propTypes2.default.oneOf(["none", "forwards", "backwards", "both"]),
  playState: _propTypes2.default.oneOf(["paused", "running"]),
  timingFunction: _propTypes2.default.oneOf(["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"]),
  backfaceVisible: _propTypes2.default.oneOf(["visible", "hidden"])
};

/**
  Verify the prop `as` (check-html-tags)
*/
var verifyTags = function verifyTags(ComposedComponent) {
  return function (props, propName, componentName) {
    var prop = props[propName];
    var err = "Warning: '" + prop + "' passed to '" + ComposedComponent + "' component is not a valid html tag.";
    return _htmlTags2.default.includes(prop) ? null : console.error(err);
  };
};

/**
  Validate the children
*/
var children = function children(ComposedComponent) {
  return function (props, propName, componentName) {
    var prop = props[propName];
    if (_react.Children.count(prop) === 0) {
      console.error("Warning: '" + ComposedComponent + "' should have atleast a single child element.");
    }
  };
};

exports.validators = validators;
exports.hocValidators = hocValidators;
exports.verifyTags = verifyTags;
exports.children = children;