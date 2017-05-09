"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  Validators for animation properties
*/

/**
  animation-name
*/
var names = function names(key, propValue) {
  if (key === "name" && typeof propValue[key] !== "string") {
    console.error("Warning: Failed propType. Prop value for animation name should be a string.");
  }
};

/**
  animation-duration
*/
var duration = function duration(key, propValue) {
  if (key === "dr" && typeof propValue[key] !== "string") {
    console.error("Warning: Failed propType. Prop value for animation duration should be a string. For eg - '2s'");
  }
};

/**
  animation-timing-function
*/
var timingFunction = function timingFunction(key, propValue) {
  if (key === "tf" && typeof propValue[key] === "string") {
    var arr = ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"];

    var err = "Warning: Invalid timing Function '" + propValue[key] + "' passed to the Merge component. The prop value for 'tf' should be one of [\"linear\", \"ease\", \"ease-in\", \"ease-out\", \"ease-in-out\", \"step-start\", \"step-end\"]. Note steps(#, start|end) is currently not supported.";

    return arr.includes(propValue[key]) ? null : console.error(err);
  } else if (key === "tf" && typeof propValue[key] !== "string") {
    console.error("Warning: Failed propType. Prop value for tf should be a string. For eg - 'ease-out'");
  }
};

/**
  <Merge one={{...}} two={{...}}> Check the prop values for the keys
*/
var propValidators = function propValidators(key) {
  var keys = ["name", "dr", "tf"];
  var err = "Warning: Unknown prop '" + key + "' passed to the Merge component.";

  return keys.includes(key) ? null : console.error(err);
};

exports.names = names;
exports.duration = duration;
exports.timingFunction = timingFunction;
exports.propValidators = propValidators;