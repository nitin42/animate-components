/**
  Validators for animation properties
*/

/**
  animation-name
*/
let names = (key, propValue) => {
  if (key === "name" && typeof propValue[key] !== "string") {
    console.error(`Error: Invalid type. Prop value for animation name should be a string.`);
  }
};

/**
  animation-duration
*/
let duration = (key, propValue) => {
  if (key === "dr" && typeof propValue[key] !== "string") {
    console.error(
      `Error: Invalid type. Prop value for animation duration should be a string. For eg - '2s'`
    );
  }
};

/**
  animation-timing-function
*/
let timingFunction = (key, propValue) => {
  if (key === "tf" && typeof propValue[key] === "string") {
    let arr = [
      "linear",
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "step-start",
      "step-end"
    ];

    const err = `Error: Invalid timing Function '${propValue[key]}' passed to the Merge component. The prop value for 'tf' should be one of ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"]. Note steps(#, start|end) is currently not supported.`;

    return arr.includes(propValue[key]) ? null : console.error(err);
  } else if (key === "tf" && typeof propValue[key] !== "string") {
    console.error(
      `Error: Invalid type. Prop value for tf should be a string. For eg - 'ease-out'`
    );
  }
};

/**
  <Merge one={{...}} two={{...}}> Check the prop values for the keys
*/
let propValidators = (key) => {
  const keys = ["name", "dr", "tf"];
  const err = `Warning: Unknown prop '${key}' passed to the Merge component.`;

  return keys.includes(key) ? null : console.error(err);
};

export { names, duration, timingFunction, propValidators };
