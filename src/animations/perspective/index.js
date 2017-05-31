// @flow

import Perspective from './styledPerspective';
import HOC from '../../containers/HOC';
import type { Components } from '../../../types';

const PObj: Components = {
  PDown: HOC('PDown', Perspective.perspectiveDown),
  PUp: HOC('PUp', Perspective.perspectiveUp),
  PRight: HOC('PRight', Perspective.perspectiveRight),
  PLeft: HOC('PLeft', Perspective.perspectiveLeft),
};

export default PObj;
