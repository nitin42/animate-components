// @flow

import React, { PureComponent } from 'react';
import type { Element } from 'react';
import PropTypes from 'prop-types';

type DefaultProps = {
  timeout: number,
  children?: Element<any> // Workaround 😕
}

type Props = {
  timeout: number,
  children?: Element<any>
}

type State = {
  show: boolean
}

export default class Delay extends PureComponent<DefaultProps, Props, State> {
  // avoids warning for super() in some cases
  constructor(props: Object) {
    super(props);
  };

  timer = null;

  static displayName = 'Delay';

  static defaultProps = {
    timeout: 4, // Minimum timeout is 4ms so no difference when compared with timeout zero
  };

  static propTypes = {
    timeout: PropTypes.number,
  };

  state = {
    show: false,
  };

  componentWillMount = () => this.timer = null;

  componentDidMount = () => {
    const { timeout } = this.props;
    this.timer = setTimeout(this.setShowValue, timeout);
  };

  componentWillUnmount = () => clearTimeout(this.timer);

  setShowValue = (): void => {
    this.setState({
      show: true,
    });
  };

  render(): ?React$Element<any> {
    const { children } = this.props;
    const { show } = this.state;
    const performAnimation = show ? children : <div />;

    return performAnimation;
  }
}
