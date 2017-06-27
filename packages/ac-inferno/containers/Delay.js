// @flow

import Inferno from 'inferno';
import Component from 'inferno-component';

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

export default class Delay extends Component<DefaultProps, Props, State> {
  timer = null;

  static displayName = 'Delay';

  static defaultProps = {
    timeout: 4, // Minimum timeout is 4ms so no difference when compared with timeout zero
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
  };

  componentWillUnmount = () => {
    clearTimeout(this.timer);
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
