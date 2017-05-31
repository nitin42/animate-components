// @flow

import Expanse from './styledExpanse';
import HOC from '../../containers/HOC';
import type { Components } from '../../../types';

const expanseObj: Components = {
  ExpanseUp: HOC('ExpanseUp', Expanse.expanseUp),
  ExpanseDown: HOC('ExpanseDown', Expanse.expanseDown),
  ExpanseLeft: HOC('ExpanseLeft', Expanse.expanseLeft),
  ExpanseRight: HOC('ExpanseRight', Expanse.expanseRight),
};

export default expanseObj;
