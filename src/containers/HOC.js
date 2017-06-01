// @flow

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import checkTag from "html-tags";

import { attributes, shouldNotBeUndefined } from "../utils/attributes";

import getElementType from "../mods/getElementType";
import avoidNest from "../mods/avoidNesting";

import derive from "../utils/state";
import { direction, interpolateValidators } from "../utils/keyValidators";

type Props = {
  duration: string,
  timingFunction: string,
  delay: string,
  direction: string,
  iterations: string,
  backfaceVisible: string,
  fillMode: string,
  playState: string,
  forceInterpolate: Object,
  children: Object,
  as: string,
  style: Object,
  component: Function
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

function setTypes(ComposedComponent) {
  return {
    direction: PropTypes.oneOf([
      "normal",
      "reverse",
      "alternate",
      "alternate-reverse",
      "initial",
      "inherit",
    ]),
    fillMode: PropTypes.oneOf(["none", "forwards", "backwards", "both"]),
    playState: PropTypes.oneOf(["paused", "running"]),
    timingFunction: PropTypes.oneOf([
      "linear",
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "step-start",
      "step-end",
    ]),
    backfaceVisible: PropTypes.oneOf(["visible", "hidden"]),
    /* eslint-disable object-shorthand */
    /* eslint-disable func-names */
    as: function (props, propName) {
      const prop = props[propName];
      const err = `Warning: '${prop}' passed to '${ComposedComponent}' component is not a valid html tag.`;
      /* eslint-disable no-console */
      return checkTag.includes(prop) ? null : console.error(err);
    },
    forceInterpolate: PropTypes.objectOf((propValue, key) => {
      direction(key, propValue);
      interpolateValidators(key);
    }),
    component: PropTypes.func,
  };
}

const defaultProps = {
  duration: "1s",
  timingFunction: "ease",
  delay: "0s",
  direction: "normal",
  iterations: "1",
  backfaceVisible: "visible",
  fillMode: "none",
  playState: "running",
  as: "div",
};

function HOC(ComposedComponent: string, AnimationName: string) {
  class _Animation extends PureComponent<DefaultProps, Props, State> {
    static displayName = `${ComposedComponent}`;

    static defaultProps = {
      duration: "1s",
      timingFunction: "ease",
      delay: "0s",
      direction: "normal",
      iterations: "1",
      backfaceVisible: "visible",
      fillMode: "none",
      playState: "running",
      as: "div",
    };

    state = {
      styles: {},
    };

    componentDidMount = () => {
      this.store(this.props);
    };

    componentWillReceiveProps = (nextProps: Props) => {
      // Interpolation of new animation properties
      const deriveInterpolationFromNextProps = derive(nextProps, AnimationName);

      // Old interpolation string
      const deriveInterpolationFromPrevProps = derive(
        this.props,
        AnimationName,
      );

      if (
        deriveInterpolationFromNextProps !== deriveInterpolationFromPrevProps
      ) {
        this.setState({
          styles: Object.assign(
            {
              animation: `${deriveInterpolationFromNextProps}`,
              backfaceVisibility: `${nextProps.backfaceVisible}`,
            },
            this.props.style || {},
          ),
        });
      }
    };

    store = (props: Props) => {
      // Keyframes Interpolation and Force Interpolation
      const deriveInterpolation = derive(props, AnimationName);

      this.setState({
        styles: Object.assign(
          {
            animation: `${deriveInterpolation}`,
            backfaceVisibility: `${props.backfaceVisible}`,
          },
          this.props.style || {},
        ),
      });
    };

    render(): ?React$Element<any> {
      const ElementType = getElementType(ComposedComponent, this.props);

      const { styles } = this.state;
      const { children } = this.props;

      // Alternate, pass a component as a prop to an animation component
      const Wrapper = this.props.component;

      // Validates the DOM nesting of elements.
      const NormalizedComponent = avoidNest(ElementType, children);

      // Add rest of the props except component props(html-elements)
      const reactHtmlAttributes = attributes(this.props);

      return (
        <NormalizedComponent
          style={styles}
          {...shouldNotBeUndefined(reactHtmlAttributes)}
        >
          { Wrapper ? React.createElement(Wrapper, children) : children }
        </NormalizedComponent>
      );
    }
  }

  _Animation.propTypes = setTypes(ComposedComponent);
  _Animation.defaultProps = defaultProps;

  return _Animation;
}

export default HOC;
