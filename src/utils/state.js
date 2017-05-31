// Utilities for changing component state based on a particular prop.

const derive = (props, AnimationName) => {
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
