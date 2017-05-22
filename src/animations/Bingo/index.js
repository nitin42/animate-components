// @flow

import Bingo from './styledBingo';

import HOC from '../../containers/HOC';

import type { Components } from '../../../types';

const bingoObj: Components = {
  PuffOut: HOC('PuffOut', Bingo.puffmeout),
  PuffIn: HOC('PuffIn', Bingo.puffmein),
  VanishOut: HOC('VanishOut', Bingo.vanishout),
  VanishIn: HOC('VanishIn', Bingo.vanishin),
};

export default bingoObj;
