import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { fadeIn } from "animate-keyframes";
import { getElementType, avoidNest } from "../mods/getElement";

export default class Disappear extends PureComponent {
  constructor(props) {
    super(props);
  };

  static defaultProps = {
    name: fadeIn,
    duration: "2s",
    as: "div",
    timingFunction: "ease"
  };

  static propTypes = {
    name: PropTypes.string,
    duration: PropTypes.string,
    as: PropTypes.string,
    timingFunction: PropTypes.string,
    component: PropTypes.func
  };

  componentWillMount = () => {
    this.timeouts = null;
  };

  componentDidMount = () => {
    this.performAndDisapper(this.props);
  };

  componentWillUnmount = () => {
    this.timeouts ? clearTimeout(this.timeouts) : null;
  };

  performAndDisapper = (props) => {
    const Element = document.getElementById("animation-root");
    Element.style = `animation: ${props.name} ${props.duration} ${props.timingFunction}`; // start on initial render
    Element.addEventListener("animationend", () => {
      Element.style =
        "visibility: 'hidden'; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;";
      this.timeouts = setTimeout(() => {
        Element.remove();
      }, 2000); // Sync with fadeOut
    });
  };

  render() {
    const { name, duration, children, as, timingFunction, component, ...rest } = this.props;
    const ElementType = getElementType(Disappear, this.props);
    const NormalizedComponent = avoidNest(ElementType, this.props, 'Disappear');
    const Wrapper = this.props.component;

    return (
      <NormalizedComponent id="animation-root" {...rest}>
        { Wrapper ? React.createElement(Wrapper, children) : children }
      </NormalizedComponent>
    );
  }
}
