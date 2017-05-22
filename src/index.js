// Animation Component.
import bounceObj from './animations/bounce/index';
import Bouncing from './animations/bounce/styledBounce';

import fadeObj from './animations/fade/index';
import Fade from './animations/fade/styledFade';

import flipObj from './animations/flip/index';
import Flippy from './animations/flip/styledFlip';

import lightObj from './animations/lightspeed/index';
import Light from './animations/lightspeed/styledLight';

import rotateObj from './animations/rotate/index';
import Rotate from './animations/rotate/styledRotate';

import specialObj from './animations/special';
import Special from './animations/styledSpecial';

import slideObj from './animations/slide/index';
import Slide from './animations/slide/styledSlide';

import PObj from './animations/perspective/index';
import Perspective from './animations/perspective/styledPerspective';

import bingoObj from './animations/Bingo/index';
import Bingo from './animations/Bingo/styledBingo';

import expanseObj from './animations/expanse/index';
import Expanse from './animations/expanse/styledExpanse';

import Merge from './containers/merge';

const { Bounce, BounceUp, BounceRight, BounceLeft, BounceDown } = bounceObj;
const { bounce, bounceDown, bounceUp, bounceLeft, bounceRight } = Bouncing;

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
const {
  fadeIn,
  left,
  leftBig,
  right,
  rightBig,
  down,
  downBig,
  up,
  upBig,
} = Fade;

const { Flip, FlipX, FlipY } = flipObj;
const { flip, flipX, flipY } = Flippy;

const { LightOut, LightIn } = lightObj;
const { lightIn, lightOut } = Light;

const {
  RotateIn,
  RotateRight,
  RotateLeft,
  RotateUpRight,
  RotateUpLeft,
} = rotateObj;
const {
  rotateIn,
  rotateRight,
  rotateLeft,
  rotateUpLeft,
  rotateUpRight,
} = Rotate;

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
const {
  flash,
  rollOut,
  rollIn,
  rubber,
  swing,
  zoom,
  hinge,
  pulse,
  expandUp,
  entrance,
  hatch,
  starWars,
} = Special;

const { SlideUp, SlideRight, SlideLeft, SlideDown } = slideObj;
const { slideUp, slideDown, slideLeft, slideRight } = Slide;

const { PDown, PUp, PRight, PLeft } = PObj;
const {
  perspectiveDown,
  perspectiveUp,
  perspectiveRight,
  perspectiveLeft,
} = Perspective;

const { PuffOut, PuffIn, VanishOut, VanishIn } = bingoObj;
const { puffmeout, puffmein, vanishin, vanishout } = Bingo;

const { ExpanseUp, ExpanseRight, ExpanseDown, ExpanseLeft } = expanseObj;
const { expanseUp, expanseRight, expanseDown, expanseLeft } = Expanse;

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
  bounce,
  bounceDown,
  bounceLeft,
  bounceRight,
  bounceUp,
  fadeIn,
  left,
  down,
  downBig,
  leftBig,
  rightBig,
  right,
  up,
  upBig,
  flip,
  flipX,
  flipY,
  lightIn,
  lightOut,
  rotateIn,
  rotateLeft,
  rotateRight,
  rotateUpLeft,
  rotateUpRight,
  flash,
  rollOut,
  rollIn,
  rubber,
  swing,
  zoom,
  hinge,
  pulse,
  expandUp,
  entrance,
  hatch,
  starWars,
  slideDown,
  slideLeft,
  slideRight,
  slideUp,
  perspectiveDown,
  perspectiveUp,
  perspectiveLeft,
  perspectiveRight,
  puffmein,
  puffmeout,
  vanishout,
  vanishin,
  expanseDown,
  expanseUp,
  expanseLeft,
  expanseRight,
  Merge,
};
