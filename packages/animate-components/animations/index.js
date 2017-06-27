import {
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
} from 'animate-keyframes';
import hoc from '../containers/HOC';

// Animate Components
const bingoObj = {
  PuffOut: hoc('PuffOut', puffmeout),
  PuffIn: hoc('PuffIn', puffmein),
  VanishOut: hoc('VanishOut', vanishout),
  VanishIn: hoc('VanishIn', vanishin),
};

const bounceObj = {
  Bounce: hoc('Bounce', bounce),
  BounceDown: hoc('BounceDown', bounceDown),
  BounceUp: hoc('BounceUp', bounceUp),
  BounceLeft: hoc('BounceLeft', bounceLeft),
  BounceRight: hoc('BounceRight', bounceRight),
};

const expanseObj = {
  ExpanseUp: hoc('ExpanseUp', expanseUp),
  ExpanseDown: hoc('ExpanseDown', expanseDown),
  ExpanseLeft: hoc('ExpanseLeft', expanseLeft),
  ExpanseRight: hoc('ExpanseRight', expanseRight),
};

const fadeObj = {
  FadeIn: hoc('FadeIn', fadeIn),
  FadeInDown: hoc('FadeInDown', down),
  FadeInDownBig: hoc('FadeInDownBig', downBig),
  FadeInUp: hoc('FadeInUp', up),
  FadeInUpBig: hoc('FadeInUpBig', upBig),
  FadeInLeft: hoc('FadeInLeft', left),
  FadeInLeftBig: hoc('FadeInLeftBig', leftBig),
  FadeInRight: hoc('FadeInRight', right),
  FadeInRightBig: hoc('FadeInRightBig', rightBig),
};

const lightObj = {
  LightIn: hoc('LightIn', lightIn),
  LightOut: hoc('LightOut', lightOut),
};

const PObj = {
  PDown: hoc('PDown', perspectiveDown),
  PUp: hoc('PUp', perspectiveUp),
  PRight: hoc('PRight', perspectiveRight),
  PLeft: hoc('PLeft', perspectiveLeft),
};

const rotateObj = {
  RotateIn: hoc('RotateIn', rotateIn),
  RotateLeft: hoc('RotateLeft', rotateLeft),
  RotateRight: hoc('RotateRight', rotateRight),
  RotateUpLeft: hoc('RotateUpLeft', rotateUpLeft),
  RotateUpRight: hoc('RotateUpRight', rotateUpRight),
};

const slideObj = {
  SlideUp: hoc('SlideUp', slideUp),
  SlideDown: hoc('SlideDown', slideDown),
  SlideRight: hoc('SlideRight', slideRight),
  SlideLeft: hoc('SlideLeft', slideLeft),
};

const specialObj = {
  Flash: hoc('Flash', flash),
  RollOut: hoc('RollOut', rollOut),
  RollIn: hoc('RollIn', rollIn),
  Rubber: hoc('Rubber', rubber),
  Swing: hoc('Swing', swing),
  Zoom: hoc('Zoom', zoom),
  Hinge: hoc('Hinge', hinge),
  Pulse: hoc('Pulse', pulse),
  ExpandUp: hoc('ExpandUp', expandUp),
  Entrance: hoc('Entrance', entrance),
  Hatch: hoc('Hatch', hatch),
  StarWars: hoc('StarWars', starWars),
};

const flipObj = {
  Flip: hoc('Flip', flip),
  FlipX: hoc('FlipX', flipX),
  FlipY: hoc('FlipY', flipY),
};

export {
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
};
