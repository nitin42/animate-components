// @flow

type Delay$Component$Props = {
  timeout: number,
  children?: React$Element<any>
};

type Delay$Component$State = {
  show: boolean
};

type Merge$Component$Props = {
  one: Object,
  two: Object,
  as: string,
  style?: Object,
  component?: Function,
  children?: React$Element<any>
};

type Merge$Component$State = {
  styles: Object
};

type Disappear$Component$Props = {
  name: string,
  duration: string,
  as: string,
  timingFunction: string,
  component?: Function,
  children?: React$Element<any>,
  rest?: any
};

type High$Order$Component$Props = {
  duration: string,
  timingFunction: string,
  delay: string,
  direction: string,
  iterations: string,
  backfaceVisible: string,
  fillMode: string,
  playState: string,
  as: string,
  component?: Function,
  children?: React$Element<any>,
  forceInterpolate?: Object,
  style?: Object
};

type High$Order$Component$State = {
  styles: Object
};

class HighOrderComponent extends React$Component {
  props: High$Order$Component$Props;
  state: High$Order$Component$State;
  setAnimation: (Props: High$Order$Component$Props) => void;
}

class Disappear$Component extends React$Component {
  props: Disappear$Component$Props;
  performAndDisapper: (prop: Disappear$Component$Props) => void;
}

class Merge$Component extends React$Component {
  props: Merge$Component$Props;
  state: Merge$Component$State;
}

class Delay$Component extends React$Component {
  props: Delay$Component$Props;
  state: Delay$Component$State;
  setShowValue: () => void;
}

declare module "animate-components" {
  declare type High$Order$Component = typeof HighOrderComponent;

  declare module.exports: {
    Bounce: High$Order$Component,
    BounceUp: High$Order$Component,
    BounceRight: High$Order$Component,
    BounceLeft: High$Order$Component,
    BounceDown: High$Order$Component,
    FadeIn: High$Order$Component,
    FadeInUp: High$Order$Component,
    FadeInRight: High$Order$Component,
    FadeInLeft: High$Order$Component,
    FadeInDown: High$Order$Component,
    FadeInUpBig: High$Order$Component,
    FadeInLeftBig: High$Order$Component,
    FadeInRightBig: High$Order$Component,
    Flip: High$Order$Component,
    FlipX: High$Order$Component,
    FlipY: High$Order$Component,
    LightOut: High$Order$Component,
    LightIn: High$Order$Component,
    RotateIn: High$Order$Component,
    RotateRight: High$Order$Component,
    RotateLeft: High$Order$Component,
    RotateUpRight: High$Order$Component,
    RotateUpLeft: High$Order$Component,
    Flash: High$Order$Component,
    RollOut: High$Order$Component,
    RollIn: High$Order$Component,
    Rubber: High$Order$Component,
    Swing: High$Order$Component,
    Zoom: High$Order$Component,
    Hinge: High$Order$Component,
    Pulse: High$Order$Component,
    SlideUp: High$Order$Component,
    SlideDown: High$Order$Component,
    SlideLeft: High$Order$Component,
    SlideRight: High$Order$Component,
    StarWars: High$Order$Component,
    ExpandUp: High$Order$Component,
    Entrance: High$Order$Component,
    Hatch: High$Order$Component,
    PDown: High$Order$Component,
    PUp: High$Order$Component,
    PRight: High$Order$Component,
    PLeft: High$Order$Component,
    PuffIn: High$Order$Component,
    PuffOut: High$Order$Component,
    VanishIn: High$Order$Component,
    VanishOut: High$Order$Component,
    ExpanseLeft: High$Order$Component,
    ExpanseRight: High$Order$Component,
    ExpanseDown: High$Order$Component,
    ExpanseUp: High$Order$Component,
    Merge: typeof Merge$Component,
    Delay: typeof Delay$Component,
    Disappear: typeof Disappear$Component,
    hoc: High$Order$Component
  };
}
