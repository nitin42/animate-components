import {
	lightIn,
	lightOut,
} from './styledLight';

import HOC from '../HOC';

// Lightspeed animation components
const lightObj = {
	LightIn: HOC('LightIn', lightIn),
	LightOut: HOC('LightOut', lightOut),
};

export default lightObj;
