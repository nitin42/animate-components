// @flow

import React, { PureComponent } from "react";

import { validators, verifyTags, children } from "../utils/propsValidator";

import { getElementType, computeElementType } from "../mods/getElementType";

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

  store = (props: Props) => {
    // <Merge one={} two={} />
    const { one, two } = props;

    // Not destructuring, same keys causes collision. (difficulties with defaultProps)
    this.setState({
      styles: {
        animation: `${one["name"] || ""} ${one["dr"] || "2s"} ${one["tf"] || "ease-in"}, ${two["name"] || ""} ${two["dr"] || "2s"} ${two["tf"] || "ease-in"}`,
        // For some animations like rotate and flip.
        backfaceVisibility: "visible"
      }
    });
  };

  render(): ?React$Element<any> {
    const ElementType = getElementType(
      Merge,
      this.props,
      computeElementType(this.props)
    );

    return (
      <ElementType style={this.state.styles}>
        {this.props.children}
      </ElementType>
    );
  }
}

export default Merge;
