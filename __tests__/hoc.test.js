import React from "react";
import renderer from "react-test-renderer";
import { keyframes } from "styled-components";
import "jest-styled-components";
import { shallow } from "enzyme";

import HOC from "../src/animations/HOC";

const sample = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

const Sample = HOC("Sample", sample);

const redundComponent = (
  <Sample duration="2s">
    Hello World!
  </Sample>
);

it("High Order Component should be a function", () => {
  expect(typeof HOC).toBe("function");
});

it("High Order Component wraps the children under h1 element", () => {
  const tree = renderer
    .create(
      <Sample duration="2s" as="h1">
        Hello World!
      </Sample>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("High Order Component wraps the children under div (default)", () => {
  const tree = renderer.create(redundComponent).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Matches keyframes created by styled-components and default props", () => {
  const tree = renderer.create(redundComponent).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

it("High Order Component calls componentDidMount lifecycle method", () => {
  const wrapper = shallow(redundComponent);
  wrapper.instance().componentDidMount();
	// Also calls store() method when component mounts.
});

it("High Order Component updates the styles when the component mounts", () => {
  const wrapper = shallow(redundComponent);
  wrapper.instance().componentDidMount();

  expect(wrapper.state("styles")).toEqual({
    animation: "UNeSH 2s ease 0s 1 normal none running",
    backfaceVisibility: "visible"
  });
});
