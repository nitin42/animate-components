// @flow

import { Up, down, left, right } from './styledExpanse';

import HOC from '../HOC';

import type { Components } from '../../../types';

const expanseObj: Components = {
	ExpanseUp: HOC('ExpanseUp', Up),
	ExpanseDown: HOC('ExpanseDown', down),
	ExpanseLeft: HOC('ExpanseLeft', left),
	ExpanseRight: HOC('ExpanseRight', right)
}

export default expanseObj;