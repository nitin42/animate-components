// @flow

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import checkTag from "html-tags";

import { attributes, shouldNotBeUndefined } from "../utils/attributes";

import getElementType from "../mods/getElementType";
import avoidNest from "../mods/avoidNesting";

import {
  names,
  duration,
  timingFunction,
  propValidators,
} from "../utils/keyValidators";

type State = {
  styles: Object
};

type Props = {
  one: Object,
  two: Object,
  children: Object,
  as: string,
  style: Object,
  component: Function
};

type DefaultProps = {
  one: Object,
  two: Object,
  as: string
};

const validators = {
  prop: PropTypes.objectOf((propValue, key) => {
    names(key, propValue);
    duration(key, propValue);
    timingFunction(key, propValue);
    propValidators(key);
  }),
};

const propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  one: validators.prop,
  /* eslint-disable react/no-unused-prop-types */
  two: validators.prop,
  /* eslint-disable object-shorthand */
  /* eslint-disable func-names */
  /* eslint-disable react/no-unused-prop-types */
  as: function (props, propName) {
    const prop = props[propName];
    const err = `Warning: '${prop}' passed to 'Merge' component is not a valid html tag.`;
    /* eslint-disable no-console */
    return checkTag.includes(prop) ? null : console.error(err);
  },
  component: PropTypes.func,
};

// Single prop update
function setAttr(prop: Object) {
  return `${prop.name || ""} ${prop.duration || "1s"} ${prop.timingFunction || "ease"}`;
}

// As a callback for state update
function update(state: State, props: Props) {
  const { one, two } = props;
  const properties = `${setAttr(one)}, ${setAttr(two)}`;

  return {
    styles: Object.assign(
      {
        animation: `${properties}`,
        backfaceVisibility: "visible",
      },
      props.style || {},
    ),
  };
}

// Pure Component (implicit shallow compare)
class Merge extends PureComponent<DefaultProps, Props, State> {
  static displayName = "Merge";

  static defaultProps = {
    one: {},
    two: {},
    as: "div",
  };

  state = {
    styles: {},
  };

  componentDidMount = () => {
    this.setState(update);
  };

  // componentWillReceiveProps = (nextProps: Props) => {
  //   // New state object
  //   const newUpdate = update(this.state, nextProps);
  //
  //   // Previous state object
  //   const prevUpdate = update(this.state, this.props);
  //
  //   // Update with setState callback
  //   if (newUpdate !== prevUpdate) {
  //     this.setState(newUpdate);
  //   }
  // };

  render(): ?React$Element<any> {
    const ElementType = getElementType(Merge, this.props);

    const { styles } = this.state;
    const { children } = this.props;

    // Alternate, pass a component as a prop to the Merge component
    const Wrapper = this.props.component;

    // Validates the DOM nesting of elements.
    const NormalizedComponent = avoidNest(ElementType, children);

    // Add rest of the props except component props(html-elements)
    const reactHtmlAttributes = attributes(this.props);

    return (
      <NormalizedComponent
        style={styles}
        {...shouldNotBeUndefined(reactHtmlAttributes)}
      >
        { Wrapper ? React.createElement(Wrapper, children) : children }
      </NormalizedComponent>
    );
  }
}

Merge.propTypes = propTypes;

export default Merge;
