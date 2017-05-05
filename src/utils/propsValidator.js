import { Children } from "react";
import PropTypes from "prop-types";
import checkTag from "html-tags";

import {
  names,
  duration,
  timingFunction,
  propValidators
} from "./mergeValidators";

/**
  Prop Validator
*/
const validators = {
  prop: PropTypes.objectOf(
    (propValue, key, componentName, location, propFullName) => {
      names(key, propValue);
      duration(key, propValue);
      timingFunction(key, propValue);
      propValidators(key);
    }
  )
};

/**
  Props validators for High Order Component
*/
const hocValidators = {
  direction: PropTypes.oneOf([
    "normal",
    "reverse",
    "alternate",
    "alternate-reverse",
    "initial",
    "inherit"
  ]),
  fillMode: PropTypes.oneOf(["none", "forwards", "backwards", "both"]),
  playState: PropTypes.oneOf(["paused", "running"]),
  timingFunction: PropTypes.oneOf([
    "linear",
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "step-start",
    "step-end"
  ]),
  backfaceVisible: PropTypes.oneOf(["visible", "hidden"])
};

/**
  Verify the prop `as` (check-html-tags)
*/
let verifyTags = ComposedComponent => {
  return (props, propName, componentName) => {
    let prop = props[propName];
    const err = `Warning: ${prop} passed to ${ComposedComponent} component is not a valid HTML tag.`;
    return checkTag.includes(prop) ? null : console.error(err);
  };
};

/**
  Validate the children
*/
let children = ComposedComponent => {
  return (props, propName, componentName) => {
    let prop = props[propName];
    if (Children.count(prop) === 0) {
      console.error(
        `Warning: ${ComposedComponent} should have atleast a single child element.`
      );
    }
  };
};

export { validators, hocValidators, verifyTags, children };
