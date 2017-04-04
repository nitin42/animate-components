// @flow

import React, { Component } from 'react';

type Props = {
  duration: string,
  timingFunction: string,
  delay: string,
  direction: string,
  iterations: string,
  backfaceVisible: string,
  fillMode: string,
  playState: string
};

type DefaultProps = {
  duration: string,
  timingFunction: string,
  delay: string,
  direction: string,
  iterations: string,
  backfaceVisible: string,
  fillMode: string,
  playState: string
};

type State = {
  styles: Object
};

let HOC = (componentName: string, animationName: string) =>
  class extends Component {
    state = {
      styles: {}
    };

    static defaultProps = {
      duration: "1s",
      timingFunction: "ease",
      delay: "0s",
      direction: "normal",
      iterations: "1",
      backfaceVisible: "visible",
      fillMode: "none",
      playState: "running"
    };

    componentDidMount = () => {
      const {
        duration,
        timingFunction,
        delay,
        direction,
        iterations,
        backfaceVisible,
        fillMode,
        playState
      } = this.props;

      this.setState({
        styles: {
          display: "inline-block" /** <span> elements can't be animated with CSS. In order to animate them with 
                                CSS we assign display property to them */,
          // Works but will be updated later.
          animation: `${animationName} ${duration} ${timingFunction} ${delay} ${iterations} ${direction} ${fillMode} ${playState}`,
          backfaceVisibility: `${backfaceVisible}`
        }
      });
    }

    // Using <span> instead of composedComponent because each component has a base component <span> only.
    render() {
      return (
        <span style={this.state.styles}>
          {this.props.children}
        </span>
      );
    }
  };

export default HOC;