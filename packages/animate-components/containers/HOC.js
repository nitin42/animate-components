// @flow

import React, { PureComponent } from 'react';
import type { Element } from 'react';
import PropTypes from 'prop-types';
import checkTag from 'html-tags';
import { Render } from 'element-utils';
import derive from '../utils/state';
import { direction, interpolateValidators } from '../utils/keyValidators';

type DefaultProps = {
  duration: string,
  timingFunction: string,
  delay: string,
  direction: string,
  iterations: string,
  backfaceVisible: string,
  fillMode: string,
  playState: string,
  as: string,
  component?: Function,
  children?: Element<any>,
  forceInterpolate?: Object,
  style?: Object
}

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
  component?: Function,
  children?: Element<any>,
  forceInterpolate?: Object,
  style?: Object
}

type State = {
  styles: Object
}

function setPropTypes(ComposedComponent: string) {
  return {
    direction: PropTypes.oneOf([
      'normal',
      'reverse',
      'alternate',
      'alternate-reverse',
      'initial',
      'inherit'
    ]),
    fillMode: PropTypes.oneOf(['none', 'forwards', 'backwards', 'both']),
    playState: PropTypes.oneOf(['paused', 'running']),
    timingFunction: PropTypes.oneOf([
      'linear',
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'step-start',
      'step-end'
    ]),
    backfaceVisible: PropTypes.oneOf(['visible', 'hidden']),
    /* eslint-disable object-shorthand */
    /* eslint-disable func-names */
    as: function(props, propName) {
      const prop = props[propName];
      const err = `Warning: '${prop}' passed to '${ComposedComponent}' component is not a valid html tag.`;
      /* eslint-disable no-console */
      return checkTag.includes(prop) ? null : console.error(err);
    },
    forceInterpolate: PropTypes.objectOf((propValue, key) => {
      direction(key, propValue);
      interpolateValidators(key);
    }),
    component: PropTypes.func
  };
}

function hoc(ComposedComponent: string, AnimationName: string): Function {
  class _Animation extends PureComponent<DefaultProps, Props, State> {
    constructor(props: Object) {
      super(props);
    };

    static displayName = `${ComposedComponent}`;

    static defaultProps = {
      duration: '1s',
      timingFunction: 'ease',
      delay: '0s',
      direction: 'normal',
      iterations: '1',
      backfaceVisible: 'visible',
      fillMode: 'none',
      playState: 'running',
      as: 'div'
    };

    state = {
      styles: {}
    };

    componentDidMount = () => {
      this.setAnimation(this.props);
    };

    componentWillReceiveProps = (nextProps: Props) => {
      // Interpolation of new animation properties
      const deriveInterpolationFromNextProps = derive(nextProps, AnimationName);

      // Old interpolation string
      const deriveInterpolationFromPrevProps = derive(
        this.props,
        AnimationName
      );

      if (
        deriveInterpolationFromNextProps !== deriveInterpolationFromPrevProps
      ) {
        this.setState({
          styles: Object.assign(
            {
              animation: `${deriveInterpolationFromNextProps}`,
              backfaceVisibility: `${nextProps.backfaceVisible}`
            },
            this.props.style || {}
          )
        });
      }
    };

    setAnimation = (props: Props) => {
      // Keyframes Interpolation and Force Interpolation
      const deriveInterpolation = derive(props, AnimationName);

      this.setState({
        styles: Object.assign(
          {
            animation: `${deriveInterpolation}`,
            backfaceVisibility: `${props.backfaceVisible}`
          },
          this.props.style || {}
        )
      });
    };

    render(): ?React$Element<any> {
      const {
        children,
        duration,
        timingFunction,
        delay,
        direction,
        iterations,
        backfaceVisible,
        fillMode,
        playState,
        forceInterpolate,
        as,
        style,
        component,
        ...rest
      } = this.props;

      return Render(ComposedComponent, this.props, this.state, rest, ComposedComponent);
    }
  }

  _Animation.propTypes = setPropTypes(ComposedComponent);

  return _Animation;
}

export default hoc;
