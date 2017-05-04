// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";
import shallowCompare from "react-addons-shallow-compare";

import { names, duration, timingFunction, propValidators } from '../utils/mergeValidators';

// <Merge one two inline />

// Custom validators for props
const validators = {
  prop: PropTypes.objectOf(
    (propValue, key, componentName, location, propFullName) => {
      names(key, propValue);
      duration(key, propValue);
      timingFunction(key, propValue);
      propValidators(key);
    }
  )
};

type Props = {
  one: Object,
  two: Object,
  children: React$Element<*>
};

type State = {
  styles: Object
};

type DefaultProps = {
  one: Object,
  two: Object
};

/**
 * Merge Component
 */
class Merge extends Component<DefaultProps, Props, State> {
  state = {
    styles: {}
  };

  // ?
  static defaultProps = {
    one: {},
    two: {}
  };

  static propTypes = {
    one: validators.prop,
    two: validators.prop,
    children: (props: Props, propName: any, componentName: string) => {
      let prop = props[propName];

      if (React.Children.count(prop) === 0) {
        return new Error(
          `Merge component should have atleast a single child element.`
        );
      }
    }
  };

  componentDidMount = () => {
    this.store(this.props);
  };
  
  // This may be fragmented in future to update each animate property individually or on user actions.
  store = (props: Props) => {
    // <Merge one={} two={} />
    const { one, two } = props;

    this.setState({
      styles: {
        animation: `${one["name"] || ""} ${one["dr"] || "2s"} ${one["tf"] || "ease-in"}, ${two["name"] || ""} ${two["dr"] || "2s"} ${two["tf"] || "ease-in"}`,
        // For some animations like rotate and flip.
        backfaceVisibility: "visible"
      }
    });
  };

  // Performance bottleneck (avoid re-render)
  shouldComponentUpdate = (nextProps: Props, nextState: State) => {
    return shallowCompare(this, nextProps, nextState);
  };

  renderRootWithBlock = (): ?React$Element<*> => {
    const styles = Object.assign({}, this.state.styles, {
      display: "block"
    });
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  };

  renderRootWithInline = (): ?React$Element<*> => {
    const styles = Object.assign({}, this.state.styles, {
      display: "inline-block"
    });

    return (
      <span style={styles}>
        {this.props.children}
      </span>
    );
  };

  render(): ?React$Element<*> {
    return this.props.inline
      ? this.renderRootWithInline()
      : this.renderRootWithBlock();
  }
}

export default Merge;
