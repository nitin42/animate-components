import { Children } from 'react';
import PropTypes from 'prop-types';
import checkTag from 'html-tags';

import {
  names,
  duration,
  timingFunction,
  propValidators,
  direction,
  interpolateValidators,
} from './keyValidators';

/**
  Prop Validator
*/
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

/**
  Props validators for High Order Component
*/
const hocValidators = {
  direction: PropTypes.oneOf([
    'normal',
    'reverse',
    'alternate',
    'alternate-reverse',
    'initial',
    'inherit',
  ]),
  fillMode: PropTypes.oneOf(['none', 'forwards', 'backwards', 'both']),
  playState: PropTypes.oneOf(['paused', 'running']),
  timingFunction: PropTypes.oneOf([
    'linear',
    'ease',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'step-start',
    'step-end',
  ]),
  forceInterpolate: PropTypes.objectOf(
    (propValue, key) => {
      direction(key, propValue);
      interpolateValidators(key);
    },
  ),
  backfaceVisible: PropTypes.oneOf(['visible', 'hidden']),
};

/**
  Verify the prop `as` (check-html-tags)
*/
function verifyTags(ComposedComponent) {
  return (props, propName) => {
    const prop = props[propName];
    const err = `Warning: '${prop}' passed to '${ComposedComponent}' component is not a valid html tag.`;
    return checkTag.includes(prop) ? null : console.error(err);
  };
}

/**
  Validate the children
*/
function children(ComposedComponent) {
  return (props, propName) => {
    const prop = props[propName];
    if (Children.count(prop) === 0) {
      console.error(`Warning: '${ComposedComponent}' should have atleast a single child element.`);
    }
  };
}

export { validators, hocValidators, verifyTags, children };
