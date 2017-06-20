import React from 'react';
import { avoidNest, getElementType } from '../mods/getElement';

const Render = (ComposedComponent, props, state, rest, DisplayName) => {
  const ElementType = getElementType(ComposedComponent, props);
  const { styles } = state;
  const Wrapper = props.component;
  const NormalizedComponent = avoidNest(ElementType, props, DisplayName) || 'div';

  return (
    <NormalizedComponent style={styles} {...rest}>
      {Wrapper ? React.createElement(Wrapper, props.children) : props.children}
    </NormalizedComponent>
  );
};

export default Render;
