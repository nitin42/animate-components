// @flow

import Inferno from 'inferno';
import Component from 'inferno-component';
import { Render } from '../utils/index';

type DefaultProps = {
  one: Object,
  two: Object,
  as: string,
  style?: Object,
  component?: Function,
  children?: Element<any>
}

type Props = {
  one: Object,
  two: Object,
  as: string,
  style?: Object,
  component?: Function,
  children?: Element<any>
}

type State = {
  styles: Object
}

// Single prop update
function setAttr(prop: Object): string {
  return `${prop.name || ''} ${prop.duration || '1s'} ${prop.timingFunction || 'ease'}`;
}

// As a callback for state update
function update(state: State, props: Props): Object {
  const { one, two } = props;
  const properties = `${setAttr(one)}, ${setAttr(two)}`;

  return {
    styles: Object.assign(
      {
        animation: `${properties}`,
        backfaceVisibility: 'visible'
      },
      props.style || {}
    )
  };
}

export default class Merge extends Component<DefaultProps, Props, State> {
  static displayName = 'Merge';

  static defaultProps = {
    one: {},
    two: {},
    as: 'div'
  };

  state = {
    styles: {}
  };

  componentDidMount = () => {
    this.setState(update);
  };

  componentWillReceiveProps = (nextProps: Props) => {
    const newUpdate = update(this.state, nextProps);
    const prevUpdate = update(this.state, this.props);

    // Update with setState callback
    if (newUpdate !== prevUpdate) {
      this.setState(newUpdate);
    }
  };

  render() {
    const { children, one, two, as, style, component, ...rest } = this.props;
    return Render(Merge, this.props, this.state, rest, 'Merge');
  }
}
