import bounceObj from "./lib/animations/bounce/index";
import fadeObj from "./lib/animations/fade/index";
import flipObj from "./lib/animations/flip/index";
import lightObj from "./lib/animations/lightspeed/index";
import rotateObj from "./lib/animations/rotate/index";
import specialObj from "./lib/animations/special";
import slideObj from "./lib/animations/slide/index";

const { Bounce, BounceUp, BounceRight, BounceLeft, BounceDown } = bounceObj;

const {
  FadeIn,
  FadeInUp,
  FadeInRight,
  FadeInLeft,
  FadeInDown,
  FadeInUpBig,
  FadeInRightBig,
  FadeInLeftBig
} = fadeObj;

const { Flip, FlipX, FlipY } = flipObj;

const { LightOut, LightIn } = lightObj;

const {
  RotateIn,
  RotateRight,
  RotateLeft,
  RotateUpRight,
  RotateUpLeft
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
  Hatch
} = specialObj;

const { SlideUp, SlideRight, SlideLeft, SlideDown } = slideObj;

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
  ExpandUp,
  Entrance,
  Hatch
};