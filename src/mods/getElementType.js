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
let getElementType = (Component, props) => {
  const { defaultProps = {} } = Component;

  if (props.as && props.as !== defaultProps.as) return props.as;

  const computedElement = computeElementType(props);
  return computedElement ? computedElement : null;

  // Redundant ?
  return defaultProps.as || "div";
};

export default getElementType;
