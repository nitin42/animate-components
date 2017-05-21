// @flow

import React, { PureComponent } from 'react';

import getElementType from '../mods/getElementType';
import avoidNest from '../mods/avoidNesting';

import { validators, verifyTags, children } from '../utils/propsValidator';

import { returnAnimation } from '../utils/state';

type State = {
  styles: Object
};

type Props = {
  one: Object,
  two: Object,
  children: Object,
  as: string,
};

type DefaultProps = {
  one: Object,
  two: Object,
  as: string
};

// Pure Component (implicit shallow compare)
class Merge extends PureComponent<DefaultProps, Props, State> {
  static displayName = 'Merge';

  static defaultProps = {
    one: {},
    two: {},
    as: 'div',
  };

  static propTypes = {
    one: validators.prop,
    two: validators.prop,
    as: verifyTags('Merge'),
    children: children('Merge'),
  };

  state = {
    styles: {},
  };

  componentDidMount = () => {
    this.store(this.props);
  };

  store = (props: Props) => {
    const { one, two } = props;

    this.setState({
      styles: {
        animation: `${(returnAnimation(one), returnAnimation(two))}`,

        // For some animations like rotate and flip.
        backfaceVisibility: 'visible',
      },
    });
  };

  render(): ?React$Element<any> {
    const ElementType = getElementType(Merge, this.props);

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
}

export default Merge;
