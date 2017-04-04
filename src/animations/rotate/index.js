// @flow

import {
  rotateIn,
  rotateLeft,
  rotateRight,
  rotateUpRight,
  rotateUpLeft,
} from './styledRotate';

import HOC from '../HOC';

import type { Components } from '../../../types';

// Rotating animation components
const rotateObj: Components = {
  RotateIn: HOC('RotateIn', rotateIn),
  RotateLeft: HOC('RotateLeft', rotateLeft),
  RotateRight: HOC('RotateRight', rotateRight),
  RotateUpLeft: HOC('RotateUpLeft', rotateUpLeft),
  RotateUpRight: HOC('RotateUpRight', rotateUpRight),
};

export default rotateObj;
