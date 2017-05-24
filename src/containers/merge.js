// @flow

import React, { PureComponent } from 'react';
import { attributes, shouldNotBeUndefined } from 'react-attributes';

import getElementType from '../mods/getElementType';
import avoidNest from '../mods/avoidNesting';

import { validators, verifyTags, children } from '../utils/propsValidator';

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

function setAttr(prop) {
  return `${prop.name || ''} ${prop.duration || '1s'} ${prop.timingFunction || 'ease'}`;
}

function update(state, props) {
  const { one, two } = props;
  const properties = `${setAttr(one)}, ${setAttr(two)}`;

  return {
    styles: Object.assign({
      animation: `${properties}`,
      backfaceVisibility: 'visible',
    }, props.style || {}),
  };
}

// Pure Component (implicit shallow compare)
export default class Merge extends PureComponent<DefaultProps, Props, State> {
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
    children: children(Merge),
  };

  state = {
    styles: {},
  };

  componentDidMount = () => {
    this.setState(update);
  };

  render(): ?React$Element<any> {
    const ElementType = getElementType(Merge, this.props);

    const { styles } = this.state;
    const { children } = this.props;

    // Validates the DOM nesting of elements.
    const NormalizedComponent = avoidNest(ElementType, children);

    // Add rest of the props except component props(html-elements)
    const reactHtmlAttributes = attributes(this.props);

    return (
      <NormalizedComponent style={styles} {...shouldNotBeUndefined(reactHtmlAttributes)}>
        {this.props.children}
      </NormalizedComponent>
    );
  }
}
