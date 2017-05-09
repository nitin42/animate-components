// @flow

import React, { PureComponent } from "react";

import { validators, verifyTags, children } from "../utils/propsValidator";

import getElementType from "../mods/getElementType";

type Props = {
  one: Object,
  two: Object,
  as: string,
  children: React$Element<*>
};

type State = {
  styles: Object
};

type DefaultProps = {
  one: Object,
  two: Object,
  as: string
};

/**
 * Merge Component
 */
class Merge extends PureComponent<DefaultProps, Props, State> {
  state = {
    styles: {}
  };

  static defaultProps = {
    one: {},
    two: {},
    as: "div"
  };

  static propTypes = {
    one: validators.prop,
    two: validators.prop,
    as: verifyTags("Merge"),
    children: children("Merge")
  };

  componentDidMount = () => {
    this.store(this.props);
  };

  // Also returns default props (will be moved)
  returnAnimation = (prop: Props) => {
    return `${prop["name"] || ""} ${prop["dr"] || "2s"} ${prop["tf"] || "ease-in"}`;
  };

  store = (props: Props) => {
    const { one, two } = props;

    this.setState({
      styles: {
        animation: `${(this.returnAnimation(one), this.returnAnimation(two))}`,

        // For some animations like rotate and flip.
        backfaceVisibility: "visible"
      }
    });
  };

  render(): ?React$Element<any> {
    const ElementType = getElementType(Merge, this.props);

    const { styles } = this.state;
    const { children } = this.props;

    return (
      <ElementType style={styles}>
        {children}
      </ElementType>
    );
  }
}

export default Merge;
