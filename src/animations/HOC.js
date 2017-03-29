import React, { Component } from "react";

let HOC = (componentName, animationName) =>
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
      backfaceVisibility: "visible",
      fillMode: "none"
    };

    static propTypes = {
      duration: React.PropTypes.string,
      timingFunction: React.PropTypes.string,
      delay: React.PropTypes.string,
      direction: React.PropTypes.string,
      iterations: React.PropTypes.string,
      backfaceVisible: React.PropTypes.string,
      fillMode: React.PropTypes.string
    };

    componentDidMount = () => {
      const {
        duration,
        timingFunction,
        delay,
        direction,
        iterations,
        backfaceVisible,
        fillMode
      } = this.props;

      this.setState({
        styles: {
          display: "inline-block" /** <span> elements can't be animated with CSS. In order to animate them with 
                                CSS we assign display property to them */,
          WebkitAnimation: `${animationName} ${duration} ${timingFunction} ${delay} ${fillMode} ${direction} ${iterations}`,
          backfaceVisibility: `${backfaceVisible}`
        }
      });
    };

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