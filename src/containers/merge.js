// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import checkTag from 'html-tags';

import { attributes, shouldNotBeUndefined } from '../utils/attributes';

import getElementType from '../mods/getElementType';
import avoidNest from '../mods/avoidNesting';

import {
  names,
  duration,
  timingFunction,
  propValidators,
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
  /* eslint-disable object-shorthand */
  /* eslint-disable func-names */
  as: function (props, propName) {
    const prop = props[propName];
    const err = `Warning: '${prop}' passed to 'Merge' component is not a valid html tag.`;
    /* eslint-disable no-console */
    return checkTag.includes(prop) ? null : console.error(err);
  },
  children: function (props, propName) {
    const prop = props[propName];
    /* eslint-disable no-console */
    if (React.Children.count(prop) === 0) {
      console.error('Warning: \'Merge\' should have atleast a single child element.');
    }
  },
};

// Single prop update
function setAttr(prop: Object) {
  return `${prop.name || ''} ${prop.duration || '1s'} ${prop.timingFunction || 'ease'}`;
}

// As a callback for state update
function update(state: State, props: Props) {
  const { one, two } = props;
  const properties = `${setAttr(one)}, ${setAttr(two)}`;

  return {
    styles: Object.assign({
      animation: `${properties}`,
      backfaceVisibility: 'visible',
    }, props.style || {}),
  };
}

const defaultProps = {
  one: {},
  two: {},
  as: 'div',
};

// Pure Component (implicit shallow compare)
class Merge extends PureComponent<DefaultProps, Props, State> {
  static displayName = 'Merge';

  state = {
    styles: {},
  };

  componentDidMount = () => {
    this.setState(update);
  };

  componentWillReceiveProps = (nextProps: Props) => {
    // New state object
    const newUpdate = update(this.state, nextProps);

    // Previous state object
    const prevUpdate = update(this.state, this.props);

    // Update with setState callback
    if (newUpdate !== prevUpdate) {
      this.setState(newUpdate);
    }
  }

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
Merge.defaultProps = defaultProps;

export default Merge;
