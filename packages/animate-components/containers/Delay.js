import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Delay extends PureComponent {
  // avoids warning for super() in some cases
  constructor(props) {
    super(props);
  };

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

  render() {
    const { children } = this.props;
    const { show } = this.state;
    const performAnimation = show ? children : <div />;

    return performAnimation;
  }
}
