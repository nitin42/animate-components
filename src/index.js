// Animation Component.
import bounceObj from './animations/bounce/index';
import {
  bounce,
  bounceDown,
  bounceLeft,
  bounceRight,
  bounceUp,
} from './animations/bounce/styledBounce';

import fadeObj from './animations/fade/index';
import {
  fadeIn,
  left,
  down,
  downBig,
  leftBig,
  rightBig,
  right,
  up,
  upBig,
} from './animations/fade/styledFade';

import flipObj from './animations/flip/index';
import { flip, flipX, flipY } from './animations/flip/styledFlip';

import lightObj from './animations/lightspeed/index';
import { lightIn, lightOut } from './animations/lightspeed/styledLight';

import rotateObj from './animations/rotate/index';
import {
  rotateIn,
  rotateLeft,
  rotateRight,
  rotateUpLeft,
  rotateUpRight,
} from './animations/rotate/styledRotate';

import specialObj from './animations/special';
import {
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
} from './animations/styledSpecial';

import slideObj from './animations/slide/index';
import {
  slideDown,
  slideLeft,
  slideRight,
  slideUp,
} from './animations/slide/styledSlide';

import PObj from './animations/perspective/index';
import {
  perspectiveDown,
  perspectiveUp,
  perspectiveLeft,
  perspectiveRight,
} from './animations/perspective/styledPerspective';

import bingoObj from './animations/Bingo/index';
import {
  puffmein,
  puffmeout,
  vanishout,
  vanishin,
} from './animations/Bingo/styledBingo';

import expanseObj from './animations/expanse/index';
import {
  expanseDown,
  expanseUp,
  expanseLeft,
  expanseRight,
} from './animations/expanse/styledExpanse';

import Merge from './animations/merge';

// Keyframes rules for <Merge />

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
