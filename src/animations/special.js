// @flow

import Special from './styledSpecial';

import type { Components } from '../../types';

import HOC from '../containers/HOC';

// Special animation components
const specialObj: Components = {
  Flash: HOC('Flash', Special.flash),
  RollOut: HOC('RollOut', Special.rollOut),
  RollIn: HOC('RollIn', Special.rollIn),
  Rubber: HOC('Rubber', Special.rubber),
  Swing: HOC('Swing', Special.swing),
  Zoom: HOC('Zoom', Special.zoom),
  Hinge: HOC('Hinge', Special.hinge),
  Pulse: HOC('Pulse', Special.pulse),
  ExpandUp: HOC('ExpandUp', Special.expandUp),
  Entrance: HOC('Entrance', Special.entrance),
  Hatch: HOC('Hatch', Special.hatch),
  StarWars: HOC('StarWars', Special.starWars),
};

export default specialObj;
