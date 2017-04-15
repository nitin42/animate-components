import React from "react";

import renderer from "react-test-renderer";

import { keyframes } from 'styled-components';

import {shallow, mount} from 'enzyme';

import { Bounce } from "../main";

import { bounce } from '../src/animations/bounce/styledBounce';

import bounceObj from '../src/animations/bounce/index';

import * as All from '../main';

import HOC from '../src/animations/HOC';

const sample = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

const Sample = HOC('Sample', sample);

it('keyframes should be string', () => {
	expect(typeof bounce).toBe('string');
});	

it('each component should export an object containing different animation components', () => {
	expect(typeof bounceObj).toBe('object');
	expect(Object.keys(bounceObj).length).not.toBe(0);
});

it('exports all the animation components', () => {
	expect(typeof All).toBe('object');
	expect(Object.keys(All).length).toBe(39);
});

it("renders the animation component", () => {
  const tree = renderer.create(<Bounce />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders the animation component with props", () => {
  const tree = renderer
    .create(
      <Bounce duration="2s" delay="4s" direction="reverse">
        <h1>Hello World!</h1>
      </Bounce>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('High Order Component should be a function', () => {
	expect(typeof HOC).toBe('function');
});

it('High Order Component should render an animation', () => {
	const tree = renderer.create(<Sample />).toJSON();

	expect(tree).toMatchSnapshot();
});

it('High Order Component should render the children with the props', () => {
	const tree = renderer
		.create(
			<Sample duration="2s">
				<h1>Hello World!</h1>
			</Sample>
		).toJSON();

	expect(tree).toMatchSnapshot();
});

it('renders the animation component with `block` props', () => {
	const tree = renderer.create(
		<Bounce block>
			<h1>Hello World!</h1>
		</Bounce>
	).toJSON();

	expect(tree).toMatchSnapshot();
});

it('calls componentDidMount lifecycle method', () => {
	const wrapper = shallow(<Bounce />);
	wrapper.instance().componentDidMount();
});

it('calls renderRootWithBlock method when passed `block` as props', () => {
	const wrapper = shallow(<Bounce block />);
	wrapper.instance().renderRootWithBlock();
});

it('calls renderRootWithInline method (by default when no display props are passed)', () => {
	const wrapper = shallow(<Bounce />);
	wrapper.instance().renderRootWithInline();
});

it('component holds it state (defined) when no props are passed', () => {
	const wrapper = shallow(<Bounce />);

	expect(wrapper.state().styles).toBeDefined;
});

