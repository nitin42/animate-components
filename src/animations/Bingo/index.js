// @flow

import { puffmeout, puffmein, vanishout, vanishin } from './styledBingo';

import HOC from '../HOC';

import type { Components } from '../../../types';

const bingoObj: Components = {
  PuffOut: HOC('PuffOut', puffmeout),
  PuffIn: HOC('PuffIn', puffmein),
  VanishOut: HOC('VanishOut', vanishout),
  VanishIn: HOC('VanishIn', vanishin),
};

export default bingoObj;
