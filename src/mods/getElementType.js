// Returns the element type for the Component

const getElementType = (Component, props) => {
  const { defaultProps = {} } = Component;

  if (props.as && props.as !== defaultProps.as) return props.as;

  // const computedElement = computeElementType(props);
  // return computedElement ? computedElement : null;
  //
  // // Redundant ?
  return defaultProps.as || "div";
};

export default getElementType;
