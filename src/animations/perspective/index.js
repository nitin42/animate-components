// @flow

import { perspectiveDown, perspectiveUp, perspectiveRight, perspectiveLeft } from './styledPerspective';

import HOC from '../../containers/HOC';

import type { Components } from '../../../types';

const PObj: Components = {
  PDown: HOC('PDown', perspectiveDown),
  PUp: HOC('PUp', perspectiveUp),
  PRight: HOC('PRight', perspectiveRight),
  PLeft: HOC('PLeft', perspectiveLeft),
};

export default PObj;
