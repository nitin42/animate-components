import {
  bounce,
  bounceDown,
  bounceUp,
  bounceLeft,
  bounceRight,
} from './styledBounce';

import HOC from '../HOC';

// Bounce animation components
const bounceObj = {
  Bounce: HOC('Bounce', bounce),
  BounceDown: HOC('BounceDown', bounceDown),
  BounceUp: HOC('BounceUp', bounceUp),
  BounceLeft: HOC('BounceLeft', bounceLeft),
  BounceRight: HOC('BounceRight', bounceRight),
};

export default bounceObj;
