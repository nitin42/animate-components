// @flow

let names = (key: string, propValue: any) => {
  if (key === "name" && typeof propValue[key] !== "string") {
    console.error(`Warning: Animation name should be type string.`);
  }
}

let duration = (key: string, propValue: any) => {
  if (key === "dr" && typeof propValue[key] !== "string") {
    console.error(
      `Warning: Animation duration should be type string. For eg - '2s'`
    );
  }
}

let timingFunction = (key: string, propValue: any) => {
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

    const err = `Warning: Invalid timing Function '${propValue[key]}' passed to the Merge component. The prop value for 'tf' should be one of ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"]. Note steps(#, start|end) is currently not supported.`;

    return arr.includes(propValue[key]) ? null : console.error(err);
  } else if (key === "tf" && typeof propValue[key] !== "string") {
    console.error(
      `Warning: tf value should be string type. For eg - 'ease-out'`
    );
  }
}

let propValidators = (key: string) => {
  const keys = ['name', 'dr', 'tf'];
  const err = `Warning: Unknown prop '${key}' passed to the Merge component.`

  return keys.includes(key) ? null : console.error(err);
}

export {
  names,
  duration,
  timingFunction,
  propValidators
}
