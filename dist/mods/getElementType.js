"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  Computes or return default element type for the animation component.
*/
var computeElementType = function computeElementType(props) {
  var as = props.as;


  return as === null ? "div" : as;
};

/**
  Returns the element type for the Component
*/
var getElementType = function getElementType(Component, props) {
  var _Component$defaultPro = Component.defaultProps,
      defaultProps = _Component$defaultPro === undefined ? {} : _Component$defaultPro;


  if (props.as && props.as !== defaultProps.as) return props.as;

  var computedElement = computeElementType(props);
  return computedElement ? computedElement : null;

  // Redundant ?
  return defaultProps.as || "div";
};

exports.default = getElementType;