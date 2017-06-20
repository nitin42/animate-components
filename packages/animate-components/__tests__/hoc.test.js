import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { keyframes } from "styled-components";
import "jest-styled-components";
import { shallow } from "enzyme";
import * as ANIMATION_COMPONENTS from "../animations/index";

import hoc from "../containers/HOC";
import { FadeIn } from "../dist/animate-components.min.js";

const sample = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

const Sample = hoc("Sample", sample);

const sampleComponent = (
  <Sample duration="2s">
    Hello World!
  </Sample>
);

let App = () => {
  return <p>Sign of Times</p>;
};

describe("Animation Components", () => {
  it("there should be 52 animation components (currently)", () => {
    expect(Object.keys(ANIMATION_COMPONENTS)).toHaveLength(10);
  });

  it("should export all the 10 animation objects", () => {
    expect(Object.keys(ANIMATION_COMPONENTS)).toEqual([
      "flipObj",
      "specialObj",
      "slideObj",
      "rotateObj",
      "PObj",
      "lightObj",
      "fadeObj",
      "expanseObj",
      "bounceObj",
      "bingoObj"
    ]);
  });
});

describe("High Order Component", () => {
  it("should be a function", () => {
    expect(typeof hoc).toBe("function");
  });

  it("should return a class component", () => {
    expect(typeof FadeIn).toBe("function");
  });

  describe("class component <FadeIn />", () => {
    it("should render the children", () => {
      const component = shallow(
        <FadeIn>
          <h1>Hello</h1>
        </FadeIn>
      );
      expect(component.text()).toEqual("Hello");
      expect(component.find("h1").parent().is("div")).toEqual(true);
      expect(component.find("h1").parent().length).toBe(1);
    });

    it("should render children with the supported props", () => {
      const component = shallow(
        <FadeIn as="h1" duration="3s" direction="reverse" iterations="infinite">
          <h1>Hello</h1>
        </FadeIn>
      );
      expect(component.instance().props).toEqual({
        as: "h1",
        backfaceVisible: "visible",
        children: <h1>Hello</h1>,
        delay: "0s",
        direction: "reverse",
        duration: "3s",
        fillMode: "none",
        iterations: "infinite",
        playState: "running",
        timingFunction: "ease"
      });
    });

    it("should render via component prop", () => {
      const component = shallow(
        <FadeIn component={App} as="div" duration="3s" />
      );
      expect(component.type()).toEqual("div");
      const output = component.instance().props.component;
      expect(React.createElement(output)).toEqual(<App />);
    });
  });

  it("calls componentDidMount lifecycle method", () => {
    const wrapper = shallow(sampleComponent);
    wrapper.instance().componentDidMount();
    // Also calls store() method when component mounts.
  });

  it("updates the styles when the component mounts", () => {
    const wrapper = shallow(sampleComponent);
    wrapper.instance().componentDidMount();

    expect(wrapper.state("styles")).toEqual({
      animation: "UNeSH 2s ease 0s 1 normal none running",
      backfaceVisibility: "visible"
    });
  });
});
