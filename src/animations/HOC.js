// @flow

import React, { PureComponent } from "react";

import { hocValidators, verifyTags, children } from "../utils/propsValidator";

import { getElementType, computeElementType } from "../mods/getElementType";

type Props = {
  duration: string,
  timingFunction: string,
  delay: string,
  direction: string,
  iterations: string,
  backfaceVisible: string,
  fillMode: string,
  playState: string,
  as: string,
  children: React$Element<*>
};

type DefaultProps = {
  duration: string,
  timingFunction: string,
  delay: string,
  direction: string,
  iterations: string,
  backfaceVisible: string,
  fillMode: string,
  playState: string,
  as: string
};

type State = {
  styles: Object
};

/**
 * High Order Component
 * @param {string} componentName - Name of the animation component
 * @param {string} keyframes - Keyframes defined for the animation
 */
let HOC = (ComposedComponent: string, AnimationName: string) => class
  extends PureComponent<DefaultProps, Props, State> {
  state = {
    styles: {}
  };

  static propTypes = {
    direction: hocValidators.direction,
    fillMode: hocValidators.fillMode,
    playState: hocValidators.playState,
    timingFunction: hocValidators.timingFunction,
    backfaceVisible: hocValidators.backfaceVisible,
    as: verifyTags(ComposedComponent),
    children: children(ComposedComponent)
  };

  static defaultProps = {
    duration: "1s",
    timingFunction: "ease",
    delay: "0s",
    direction: "normal",
    iterations: "1",
    backfaceVisible: "visible",
    fillMode: "none",
    playState: "running",
    as: "div"
  };

  componentDidMount = () => {
    this.store(this.props);
  };

  store = (props: Props) => {
    const {
      duration,
      timingFunction,
      delay,
      direction,
      iterations,
      backfaceVisible,
      fillMode,
      playState
    } = props;

    this.setState({
      styles: {
        // All the animations have vendor prefixes so just simply setState.
        animation: `${AnimationName} ${duration} ${timingFunction} ${delay} ${iterations} ${direction} ${fillMode} ${playState}`,
        backfaceVisibility: `${backfaceVisible}`
      }
    });
  };

  render(): ?React$Element<any> {
    const ElementType = getElementType(
      ComposedComponent,
      this.props,
      computeElementType(this.props)
    );

    return (
      <ElementType style={this.state.styles}>
        {this.props.children}
      </ElementType>
    );
  }
};

export default HOC;
