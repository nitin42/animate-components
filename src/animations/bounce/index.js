// @flow

import {
  bounce,
  bounceDown,
  bounceUp,
  bounceLeft,
  bounceRight,
} from './styledBounce';

import HOC from '../../containers/HOC';

import type { Components } from '../../../types';

// Bounce animation components
const bounceObj: Components = {
  Bounce: HOC('Bounce', bounce),
  BounceDown: HOC('BounceDown', bounceDown),
  BounceUp: HOC('BounceUp', bounceUp),
  BounceLeft: HOC('BounceLeft', bounceLeft),
  BounceRight: HOC('BounceRight', bounceRight),
};

export default bounceObj;
