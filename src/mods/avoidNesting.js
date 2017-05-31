// Avoid DOM nesting of elements

const avoidNest = (elementAs, reactChildren) => {
  // No children to render. DOM nesting validated.
  let elementType = elementAs;
  if (!reactChildren) return elementType;

  if (elementType === 'div') return elementType;

  const { type } = reactChildren;

  if (type === elementType) {
    // Change to 'div' to validate DOM nesting
    elementType = 'div';
    // Should log the warning for DOM nesting validation ?
  }

  return elementType;
};

export default avoidNest;
