import React from 'react';

import {shallow, mount} from 'enzyme';

import { Bounce } from '../main';

import HOC from '../src/animations/HOC';

test('High Order Component', () => {
	expect(typeof HOC).toBe('function');
});

// Check a sample component
test("Animation Component", () => {
	const component = shallow(
		<Bounce duration="2s" />
	);

	expect(component.type()).toEqual('span');
});

test("Component html", () => {
	const wrapper = mount(<Bounce />);
	expect(wrapper.html()).toEqual(`<span style="display: inline-block;"></span>`);
});
