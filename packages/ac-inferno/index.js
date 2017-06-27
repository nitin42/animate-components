import {
  flipObj,
  specialObj,
  slideObj,
  rotateObj,
  PObj,
  lightObj,
  fadeObj,
  expanseObj,
  bounceObj,
  bingoObj,
} from './animations/index';
import Merge from './containers/merge';
import Delay from './containers/Delay';
import Disappear from './containers/Disappear';

const { Bounce, BounceUp, BounceRight, BounceLeft, BounceDown } = bounceObj;
const {
  FadeIn,
  FadeInUp,
  FadeInRight,
  FadeInLeft,
  FadeInDown,
  FadeInUpBig,
  FadeInRightBig,
  FadeInLeftBig,
} = fadeObj;
const { Flip, FlipX, FlipY } = flipObj;
const { LightOut, LightIn } = lightObj;
const {
  RotateIn,
  RotateRight,
  RotateLeft,
  RotateUpRight,
  RotateUpLeft,
} = rotateObj;
const {
  Flash,
  RollOut,
  RollIn,
  Rubber,
  Swing,
  Zoom,
  Hinge,
  Pulse,
  ExpandUp,
  Entrance,
  Hatch,
  StarWars,
} = specialObj;
const { SlideUp, SlideRight, SlideLeft, SlideDown } = slideObj;
const { PDown, PUp, PRight, PLeft } = PObj;
const { PuffOut, PuffIn, VanishOut, VanishIn } = bingoObj;
const { ExpanseUp, ExpanseRight, ExpanseDown, ExpanseLeft } = expanseObj;

/** Animation components */
export {
  Bounce,
  BounceUp,
  BounceRight,
  BounceLeft,
  BounceDown,
  FadeIn,
  FadeInUp,
  FadeInRight,
  FadeInLeft,
  FadeInDown,
  FadeInUpBig,
  FadeInLeftBig,
  FadeInRightBig,
  Flip,
  FlipX,
  FlipY,
  LightOut,
  LightIn,
  RotateIn,
  RotateRight,
  RotateLeft,
  RotateUpRight,
  RotateUpLeft,
  Flash,
  RollOut,
  RollIn,
  Rubber,
  Swing,
  Zoom,
  Hinge,
  Pulse,
  SlideUp,
  SlideDown,
  SlideLeft,
  SlideRight,
  StarWars,
  ExpandUp,
  Entrance,
  Hatch,
  PDown,
  PUp,
  PRight,
  PLeft,
  PuffIn,
  PuffOut,
  VanishIn,
  VanishOut,
  ExpanseLeft,
  ExpanseRight,
  ExpanseDown,
  ExpanseUp,
  Merge,
  Delay,
  Disappear,
};
