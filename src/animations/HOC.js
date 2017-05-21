// @flow

import React, { PureComponent } from 'react';

import { hocValidators, verifyTags, children } from '../utils/propsValidator';

import getElementType from '../mods/getElementType';
import avoidNest from '../mods/avoidNesting';

import { derive } from '../utils/state';

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

// Pure Component (implicit shallow compare)
const HOC = (ComposedComponent: string, AnimationName: string) => class
  extends PureComponent<DefaultProps, Props, State> {
    static defaultProps = {
      duration: '1s',
      timingFunction: 'ease',
      delay: '0s',
      direction: 'normal',
      iterations: '1',
      backfaceVisible: 'visible',
      fillMode: 'none',
      playState: 'running',
      as: 'div',
    };

    static propTypes = {
      direction: hocValidators.direction,
      fillMode: hocValidators.fillMode,
      playState: hocValidators.playState,
      timingFunction: hocValidators.timingFunction,
      backfaceVisible: hocValidators.backfaceVisible,
      as: verifyTags(ComposedComponent),
      forceInterpolate: hocValidators.forceInterpolate,
      children: children(ComposedComponent),
    };

    state = {
      styles: {},
    };

    componentDidMount = () => {
      this.store(this.props);
    };

    store = (props: Props) => {
      // Keyframes Interpolation and Force Interpolation
      const deriveInterpolation = derive(props, AnimationName);

      this.setState({
        styles: {
          animation: `${deriveInterpolation}`,
          backfaceVisibility: `${props.backfaceVisible}`,
        },
      });
    };

    render(): ?React$Element<any> {
      const ElementType = getElementType(ComposedComponent, this.props);

      const { styles } = this.state;
      const { children } = this.props;

      // Validates the DOM nesting of elements.
      const NormalizedComponent = avoidNest(ElementType, children);

      return React.createElement(
        NormalizedComponent,
        { style: styles },
        children,
      );
    }
  };

export default HOC;
