const avoidNest = (elementAs, props, DisplayName) => {
  let elementType = elementAs;
  if (!props.children) return elementType;

  if (elementType === "div") return elementType; // Wrap with div (default)

  const { type } = props.children;
  if (type === elementType) {
    elementType = "div"; // Wrap with div and don't mutate the children element type.
    console.warn(
      `'${DisplayName}' component rendered with an element type 'div' (DOM nesting validated). You provided an element type '${props.as}' to the prop 'as' which was similar to the children type '${type}'. More info - https://goo.gl/jZ7ktS`
    );
    return elementType;
  }

  return elementType;
};

const getElementType = (Component, props) => {
  const { defaultProps = {} } = Component;
  if (props.as && props.as !== defaultProps.as) return props.as;

  return defaultProps.as || "div";
};

export { avoidNest, getElementType };
