/**
  Computes or return default element type for the animation component.
*/
let computeElementType = props => {
  const { as } = props;

  return as === null ? "div" : as;
};

/**
  Returns the element type for the Component
*/
let getElementType = (Component, props, defaults) => {
  const { defaultProps = {} } = Component;

  if (props.as && props.as !== defaultProps.as) return props.as;

  // computeElementType (High Order Component)
  if (defaults) {
    const computedElement = defaults();
    if (computedElement) return computedElement;
  }

  // Redundant ?
  return defaultProps.as || "div";
};

export { getElementType, computeElementType };
