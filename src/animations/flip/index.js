// @flow

import {
	flip,
	flipX,
	flipY,
} from './styledFlip';

import HOC from '../HOC';

import type { Components } from '../../../types';

// Flip animation components
const flipObj: Components = {
	Flip: HOC('Flip', flip),
	FlipX: HOC('FlipX', flipX),
	FlipY: HOC('FlipY', flipY),
};

export default flipObj;
