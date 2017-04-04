// @flow

import {
	lightIn,
	lightOut,
} from './styledLight';

import HOC from '../HOC';

import type { Components } from '../../../types';

// Lightspeed animation components
const lightObj: Components = {
	LightIn: HOC('LightIn', lightIn),
	LightOut: HOC('LightOut', lightOut),
};

export default lightObj;
