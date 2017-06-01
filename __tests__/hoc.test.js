import React from "react";
import renderer from "react-test-renderer";
import { keyframes } from "styled-components";
import "jest-styled-components";
import { shallow } from "enzyme";

import HOC from "../src/containers/HOC";

const sample = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

const Sample = HOC("Sample", sample);

const sampleComponent = (
  <Sample duration="2s">
    Hello World!
  </Sample>
);

let App = () => {
	return (
		<div>
			<p>Sign of Times</p>
		</div>
	);
};

describe('High Order Component', () => {
	it("should be a function", () => {
	  expect(typeof HOC).toBe("function");
	});

	it("wraps the children under h1 element", () => {
	  const tree = renderer
	    .create(
	      <Sample duration="2s" as="h1">
	        Hello World!
	      </Sample>
	    )
	    .toJSON();
	  expect(tree).toMatchSnapshot();
	});

	it("renders the Component passed through component prop", () => {
		const tree = renderer.create(
			<Sample duration="2s" as="h1" component={App} />
		).toJSON();

		expect(tree).toMatchSnapshot();
	})

	it("wraps the children under div (default)", () => {
	  const tree = renderer.create(sampleComponent).toJSON();
	  expect(tree).toMatchSnapshot();
	});

	it("matches the keyframes created by styled-components and default props", () => {
	  const tree = renderer.create(sampleComponent).toJSON();

	  expect(tree).toMatchStyledComponentsSnapshot();
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
})
