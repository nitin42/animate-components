// @flow

import { expanseUp, expanseDown, expanseLeft, expanseRight } from './styledExpanse';

import HOC from '../HOC';

import type { Components } from '../../../types';

const expanseObj: Components = {
  ExpanseUp: HOC('ExpanseUp', expanseUp),
  ExpanseDown: HOC('ExpanseDown', expanseDown),
  ExpanseLeft: HOC('ExpanseLeft', expanseLeft),
  ExpanseRight: HOC('ExpanseRight', expanseRight),
};

export default expanseObj;
