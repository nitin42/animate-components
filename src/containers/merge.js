// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { attributes, shouldNotBeUndefined } from 'react-attributes';
import checkTag from 'html-tags';

import getElementType from '../mods/getElementType';
import avoidNest from '../mods/avoidNesting';

import {
  names,
  duration,
  timingFunction,
  propValidators
} from '../utils/keyValidators';

type State = {
  styles: Object
};

type Props = {
  one: Object,
  two: Object,
  children: Object,
  as: string,
  style: Object
};

type DefaultProps = {
  one: Object,
  two: Object,
  as: string
};

const validators = {
  prop: PropTypes.objectOf(
    (propValue, key) => {
      names(key, propValue);
      duration(key, propValue);
      timingFunction(key, propValue);
      propValidators(key);
    },
  ),
};

const propTypes = {
  one: validators.prop,
  two: validators.prop,
  as: function (props, propName) {
    const prop = props[propName];
    const err = `Warning: '${prop}' passed to 'Merge' component is not a valid html tag.`;
    return checkTag.includes(prop) ? null : console.error(err);
  },
  children: function (props, propName) {
    const prop = props[propName];
    if (React.Children.count(prop) === 0) {
      console.error(`Warning: 'Merge' should have atleast a single child element.`);
    }
  }
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
class Merge extends PureComponent<DefaultProps, Props, State> {
  static displayName = 'Merge';

  static defaultProps = {
    one: {},
    two: {},
    as: 'div',
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

Merge.propTypes = propTypes;

export default Merge;
