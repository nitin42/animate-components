// @flow

import Bouncing from './styledBounce';
import HOC from '../../containers/HOC';
import type { Components } from '../../../types';

const bounceObj: Components = {
  Bounce: HOC('Bounce', Bouncing.bounce),
  BounceDown: HOC('BounceDown', Bouncing.bounceDown),
  BounceUp: HOC('BounceUp', Bouncing.bounceUp),
  BounceLeft: HOC('BounceLeft', Bouncing.bounceLeft),
  BounceRight: HOC('BounceRight', Bouncing.bounceRight),
};

export default bounceObj;
