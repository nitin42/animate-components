import React from "react";
import renderer from "react-test-renderer";
import { keyframes } from "styled-components";

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

it("High Order Component should be a function", () => {
  expect(typeof HOC).toBe("function");
});

it("High Order Component should render the children with the props", () => {
  const tree = renderer
    .create(
      <Sample duration="2s">
        <h1>Hello World!</h1>
      </Sample>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
