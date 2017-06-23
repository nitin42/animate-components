// @flow

// Component name passed as string in HOC and React class in merge <any>
const avoidNest = (
  elementAs: string,
  props: Object,
  DisplayName: any
): string => {
  let elementType = elementAs;
  if (!props.children) return elementType;

  if (elementType === "div") return elementType; // Wrap with div (default)

  const { type } = props.children;
  if (type === elementType) {
    elementType = "div"; // Wrap with div and don't mutate the children element type.
    console.warn(
      `'${DisplayName}' component rendered with an element type 'div' (DOM nesting validated). You provided an element type '${props.as}' to the prop 'as' which was similar to the children type '${type}'. More info - https://goo.gl/wsXFiF`
    );
    return elementType;
  }

  return elementType;
};

const getElementType = (Component: any, props: Object): string => {
  const { defaultProps = {} } = Component;
  if (props.as && props.as !== defaultProps.as) return props.as;

  return defaultProps.as || "div";
};

export { avoidNest, getElementType };
