import React from 'react';
import renderer from "react-test-renderer";
import { keyframes } from "styled-components";

import Delay from '../src/containers/Delay';
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

describe('Delay component', () => {
  it('should be a function', () => {
    expect(typeof Delay).toBe('function');
  });

  it('sets the timeout for an animation component', () => {
    const tree = renderer.create(
      <Delay timeout={1000}>
        <Sample duration="2s">
          Hello World!
        </Sample>
      </Delay>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
