// @flow

import React from "react";
import { avoidNest, getElementType } from "./getElement";

const Render = (
  ComposedComponent: any,
  props: Object,
  state: Object,
  rest: any,
  DisplayName: any
): ?React$Element<any> => {
  const ElementType = getElementType(ComposedComponent, props);
  const { styles } = state;
  const Wrapper = props.component;
  const NormalizedComponent =
    avoidNest(ElementType, props, DisplayName) || "div";

  return (
    <NormalizedComponent style={styles} {...rest}>
      {Wrapper ? React.createElement(Wrapper, props.children) : props.children}
    </NormalizedComponent>
  );
};

export default Render;
