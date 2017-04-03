import {
	flip,
	flipX,
	flipY,
} from './styledFlip';

import HOC from '../HOC';

// Flip animation components
const flipObj = {
	Flip: HOC('Flip', flip),
	FlipX: HOC('FlipX', flipX),
	FlipY: HOC('FlipY', flipY),
};

export default flipObj;
