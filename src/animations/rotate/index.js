// @flow

import Rotate from './styledRotate';

import HOC from '../../containers/HOC';

import type { Components } from '../../../types';

// Rotating animation components
const rotateObj: Components = {
  RotateIn: HOC('RotateIn', Rotate.rotateIn),
  RotateLeft: HOC('RotateLeft', Rotate.rotateLeft),
  RotateRight: HOC('RotateRight', Rotate.rotateRight),
  RotateUpLeft: HOC('RotateUpLeft', Rotate.rotateUpLeft),
  RotateUpRight: HOC('RotateUpRight', Rotate.rotateUpRight),
};

export default rotateObj;
