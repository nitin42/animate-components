import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import checkTag from 'html-tags';
import Render from '../mods/Render';
import {
  names,
  duration,
  timingFunction,
  propValidators
} from '../utils/keyValidators';

// Single prop update
function setAttr(prop) {
  return `${prop.name || ''} ${prop.duration || '1s'} ${prop.timingFunction || 'ease'}`;
}

// As a callback for state update
function update(state, props) {
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

export default class Merge extends PureComponent {
  // avoids warning for super() in some cases
  constructor(props) {
    super(props);
  };

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

  componentWillReceiveProps = nextProps => {
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

const validators = {
  /* eslint-disable react/no-unused-prop-types */
  props: PropTypes.objectOf((propValue, key) => {
    names(key, propValue);
    duration(key, propValue);
    timingFunction(key, propValue);
    propValidators(key);
  })
};

Merge.propTypes = {
  one: validators.props,
  two: validators.props,
  /* eslint-disable object-shorthand */
  /* eslint-disable func-names */
  /* eslint-disable react/no-unused-prop-types */
  as: function(props, propName) {
    const prop = props[propName];
    const err = `Warning: '${prop}' passed to 'Merge' component is not a valid html tag.`;
    /* eslint-disable no-console */
    return checkTag.includes(prop) ? null : console.error(err);
  },
  component: PropTypes.func
};
