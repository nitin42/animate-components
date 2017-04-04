// @flow

import {
  flash,
  rollOut,
  rollIn,
  rubber,
  swing,
  zoom,
  hinge,
  pulse,
  expandUp,
  entrance,
  hatch,
} from './styledSpecial';

import type { Components } from '../../types';

import HOC from './HOC';

// Special animation components
const specialObj: Components  = {
  Flash: HOC('Flash', flash),
  RollOut: HOC('RollOut', rollOut),
  RollIn: HOC('RollIn', rollIn),
  Rubber: HOC('Rubber', rubber),
  Swing: HOC('Swing', swing),
  Zoom: HOC('Zoom', zoom),
  Hinge: HOC('Hinge', hinge),
  Pulse: HOC('Pulse', pulse),
  ExpandUp: HOC('ExpandUp', expandUp),
  Entrance: HOC('Entrance', entrance),
  Hatch: HOC('Hatch', hatch),
};

export default specialObj;
