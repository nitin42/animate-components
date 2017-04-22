/**
 * @author Nitin Tulswani <tulswani19@gmail.com>
 */

// Animation Component.
import bounceObj from './dist/animations/bounce/index';
import fadeObj from './dist/animations/fade/index';
import flipObj from './dist/animations/flip/index';
import lightObj from './dist/animations/lightspeed/index';
import rotateObj from './dist/animations/rotate/index';
import specialObj from './dist/animations/special';
import slideObj from './dist/animations/slide/index';
import PObj from './dist/animations/perspective/index';
import bingoObj from './dist/animations/Bingo/index';
import expanseObj from './dist/animations/expanse/index';

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
  StarWars
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
  ExpanseUp
};
