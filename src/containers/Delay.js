// @flow

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

type State = {
  show: boolean
};

type DefaultProps = {
  timeout: number
};

type Props = {
  timeout: number
};

export default class Delay extends PureComponent<DefaultProps, Props, State> {
  static displayName = "Delay";

  static defaultProps = {
    timeout: 4, // Minimum timeout is 4ms so no difference when compared with timeout zero
  };

  static propTypes = {
    timeout: PropTypes.number,
  };

  state = {
    show: false,
  };

  componentWillMount = () => {
    this.timer = null;
  };

  componentDidMount = () => {
    const { timeout } = this.props;
    this.timer = setTimeout(this.setShowValue, timeout);
    return this.timer;
  };

  componentWillUnmount = () => {
    // clear timeout_id
    this.timer ? clearTimeout(this.timer) : null;
  };

  setShowValue = () => {
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
