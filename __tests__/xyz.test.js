import React from "react";
import renderer from "react-test-renderer";
import { keyframes } from "styled-components";
import { shallow, mount } from "enzyme";

import { Bounce } from "../main";
import * as All from "../main";

import { bounce } from "../src/animations/bounce/styledBounce";
import bounceObj from "../src/animations/bounce/index";

const bounceWrapper = (
  <Bounce>
    <h1>Hello World</h1>
  </Bounce>
);

const bounceBlock = (
  <Bounce block>
    <h1>Hello World!</h1>
  </Bounce>
);

const bounceDefaultProps = {
  children: <h1>Hello World</h1>,
  duration: "1s",
  timingFunction: "ease",
  delay: "0s",
  direction: "normal",
  iterations: "1",
  backfaceVisible: "visible",
  fillMode: "none",
  playState: "running"
};

it("keyframes should be string", () => {
  expect(typeof bounce).toBe("string");
});

it("Animation component renders it children", () => {
  const tree = renderer.create(bounceWrapper).toJSON();
  expect(tree).toMatchSnapshot();
});
it("Animation component renders it children with props", () => {
  const tree = renderer
    .create(
      <Bounce duration="2s" delay="4s" direction="reverse">
        <h1>Hello World!</h1>
      </Bounce>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Animation component default props", () => {
  const wrapper = shallow(bounceWrapper);
  expect(wrapper.instance().props).toEqual(bounceDefaultProps);
});

it("Animation component renders it children with `block` prop", () => {
  const tree = renderer.create(bounceBlock).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Animation component calls componentDidMount lifecycle method", () => {
  const wrapper = shallow(bounceWrapper);
  wrapper.instance().componentDidMount();
});

it("Animation component updates the styles when the it mounts", () => {
  const wrapper = shallow(bounceWrapper);
  wrapper.instance().componentDidMount();
  expect(wrapper.state('styles')).toEqual({
    animation: `
            bGJZDZ 1s ease 0s 1 normal
            none running
          `,
    backfaceVisibility: "visible" });
});

it("Animation component calls renderRootWithBlock method when passed `block` prop", () => {
  const wrapper = shallow(bounceBlock);
  wrapper.instance().renderRootWithBlock();
});

it("calls renderRootWithInline method (by default when no display props are passed)", () => {
  const wrapper = shallow(bounceWrapper);
  wrapper.instance().renderRootWithInline();
});

it("calls shouldComponentUpdate lifecycle method for avoiding re-render of the component", () => {
  const wrapper = shallow(bounceWrapper);
	wrapper.setProps({ duration: '1s' });
  // Avoids re-render (returns true)
  wrapper.instance().shouldComponentUpdate();
});

it("each component should export an object containing different animation components", () => {
  expect(typeof bounceObj).toBe("object");
  expect(Object.keys(bounceObj).length).not.toBe(0);
});

it("exports all the animation components and keyframes", () => {
  expect(typeof All).toBe("object");
  expect(Object.keys(All).length).toBe(51);
});
