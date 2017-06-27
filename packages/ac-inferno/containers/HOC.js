// @flow

import Inferno from 'inferno';
import Component from 'inferno-component';
import { Render, derive } from '../utils/index';

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

function hoc(ComposedComponent: string, AnimationName: string): Function {
  class _Animation extends Component<DefaultProps, Props, State> {
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

    render (): ?React$Element<any> {
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

  return _Animation;
}

export default hoc;
