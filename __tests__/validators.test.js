import React from "react";
import { keyframes } from "styled-components";

import Merge from "../src/animations/merge";

import getElementType from "../src/mods/getElementType";

import {
  hocValidators,
  validators,
  verifyTags,
  children
} from "../src/utils/propsValidator";

import { left, bounce } from "../index";

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

const wrapper = (
  <Merge one={{ name: left }} two={{ name: bounce }}>
    Hello
  </Merge>
);

it("computes the element type for the Merge component based on the prop `as`", () => {
  const element = getElementType(Merge, { as: "h1" });

  expect(element).toEqual("h1");
});

it("computes the element type for the Merge component based on the default prop", () => {
  const element = getElementType(Merge, { as: null });

  expect(element).toEqual("div");
});

it("computes the element type for the High Order Component based on the prop `as`", () => {
  const element = getElementType(Sample, { as: "h1" });

  expect(element).toEqual("h1");
});

it("computes the element type for the High Order Component based on the default prop", () => {
  const element = getElementType(Sample, { as: null });

  expect(element).toEqual("div");
});
