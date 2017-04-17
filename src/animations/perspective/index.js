// @flow

import { down, up, right, left } from './styledPerspective';

import HOC from '../HOC';

import type { Components } from '../../../types';

const PObj: Components = {
	PDown: HOC('PDown', down),
	PUp: HOC('PUp', up),
	PRight: HOC('PRight', right),
	PLeft: HOC('PLeft', left)
}

export default PObj;