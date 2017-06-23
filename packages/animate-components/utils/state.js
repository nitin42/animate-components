// @flow

// Utilities for changing the component state based on a particular prop.
const derive = (props: Object, AnimationName: string): string => {
  const {
    duration,
    timingFunction,
    delay,
    direction,
    iterations,
    fillMode,
    playState,
    forceInterpolate,
  } = props;

  if (forceInterpolate) {
    return `${AnimationName} ${duration} steps(${forceInterpolate.steps}, ${forceInterpolate.direction}) ${delay} ${iterations} ${fillMode} ${playState}`;
  }

  return `${AnimationName} ${duration} ${timingFunction} ${delay} ${iterations} ${direction} ${fillMode} ${playState}`;
};

export default derive;
