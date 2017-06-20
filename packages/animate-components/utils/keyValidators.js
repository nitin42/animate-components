const names = (key, propValue) => {
  if (key === 'name' && typeof propValue[key] !== 'string') {
    /* eslint-disable no-console */
    console.error(
      'Warning: Failed propType. Prop value for animation name should be a string.',
    );
  }
};

const duration = (key, propValue) => {
  if (key === 'duration' && typeof propValue[key] !== 'string') {
    /* eslint-disable no-console */
    console.error(
      'Warning: Failed propType. Prop value for animation duration should be a string. For eg - \'2s\'',
    );
  }
};

const timingFunction = (key, propValue) => {
  if (key === 'timingFunction' && typeof propValue[key] === 'string') {
    const arr = [
      'linear',
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'step-start',
      'step-end',
    ];

    const err = `
      Warning: Invalid timing Function '${propValue[key]}' passed to the Merge component. The prop
      value for 'timingFunction' should be one of ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out',
      'step-start', 'step-end']. Note steps(#, start|end) is supported via forceInterpolate prop. Refer to the docs for more info.
    `;

    /* eslint-disable no-console */
    return arr.includes(propValue[key]) ? null : console.error(err);
  } else if (key === 'timingFunction' && typeof propValue[key] !== 'string') {
    console.error(
      'Warning: Failed propType. Prop value for tf should be a string. For eg - \'ease-out\'',
    );
  }
};

const direction = (key, propValue) => {
  if (key === 'direction' && typeof propValue[key] !== 'string') {
    /* eslint-disable no-console */
    console.error(
      'Warning: Failed propType. Prop value for \'direction\' should be a string.',
    );
  }
};

const interpolateValidators = (key) => {
  const keys = ['steps', 'direction'];
  const err = `Warning: Unknown prop '${key}' passed to the Merge component.`;

  /* eslint-disable no-console */
  return keys.includes(key) ? null : console.error(err);
};

const propValidators = (key) => {
  const keys = ['name', 'duration', 'timingFunction'];
  const err = `Warning: Unknown prop '${key}' passed to the Merge component. Prop should be one of [${keys}]`;

  /* eslint-disable no-console */
  return keys.includes(key) ? null : console.error(err);
};

export {
  names,
  duration,
  timingFunction,
  propValidators,
  direction,
  interpolateValidators,
};
