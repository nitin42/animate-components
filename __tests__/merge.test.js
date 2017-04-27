import React from "react";
import renderer from "react-test-renderer";
import { keyframes } from "styled-components";
import { shallow, mount } from "enzyme";

import { fadeIn } from "../src/animations/fade/styledFade";
import { slideUp } from "../src/animations/slide/styledSlide";

import Merge from "../src/animations/merge";

const mergeWrapper = (
  <Merge one={{ name: fadeIn }} two={{ name: slideUp }}>
    <h1>Hello World</h1>
  </Merge>
);

const mergeDefaultProps = {
  one: { name: "bcCCNc" },
  two: { name: "dVMtpd" },
  children: <h1>Hello World</h1>
};

it("Merge component should render its children with props", () => {
  const wrapper = renderer.create(mergeWrapper).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it("Merge component should call componentDidMount lifecycle method", () => {
  const wrapper = shallow(mergeWrapper);
  wrapper.instance().componentDidMount();
});

it("Merge component should set its state to the props passed to the component", () => {
  const wrapper = shallow(mergeWrapper);

  wrapper.instance().componentDidMount();
  expect(wrapper.state().styles).toEqual({ animation: "bcCCNc 2s ease-in, dVMtpd 2s ease-in", backfaceVisibility: "visible" });
});

it("Merge component should call shouldComponentUpdate to avoid re-render", () => {
  const wrapper = shallow(mergeWrapper);
  wrapper.setProps({ one: { name: "bcCCNc" }, two: { name: "dVMtpd" }, children: <h1>Hello World</h1> });
  // Avoid re-render (returns true)
  wrapper.instance().shouldComponentUpdate();
});

it("<Merge /> component default props", () => {
  const wrapper = shallow(mergeWrapper);
  expect(wrapper.instance().props).toEqual(mergeDefaultProps);
});

it("props passed to the <Merge /> component", () => {
  const wrapper = shallow(mergeWrapper);
  expect(wrapper.instance().props.one).toEqual({ name: "bcCCNc" });
  expect(wrapper.instance().props.two).toEqual({ name: "dVMtpd" });
});
