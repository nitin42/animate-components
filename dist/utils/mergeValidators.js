"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var names = function names(key, propValue) {
  if (key === "name" && typeof propValue[key] !== "string") {
    console.error("Warning: Animation name should be type string.");
  }
};

var duration = function duration(key, propValue) {
  if (key === "dr" && typeof propValue[key] !== "string") {
    console.error("Warning: Animation duration should be type string. For eg - '2s'");
  }
};

var timingFunction = function timingFunction(key, propValue) {
  if (key === "tf" && typeof propValue[key] === "string") {
    var arr = ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"];

    var err = "Warning: Invalid timing Function '" + propValue[key] + "' passed to the Merge component. The prop value for 'tf' should be one of [\"linear\", \"ease\", \"ease-in\", \"ease-out\", \"ease-in-out\", \"step-start\", \"step-end\"]. Note steps(#, start|end) is currently not supported.";

    return arr.includes(propValue[key]) ? null : console.error(err);
  } else if (key === "tf" && typeof propValue[key] !== "string") {
    console.error("Warning: tf value should be string type. For eg - 'ease-out'");
  }
};

var propValidators = function propValidators(key) {
  var keys = ['name', 'dr', 'tf'];
  var err = "Warning: Unknown prop '" + key + "' passed to the Merge component.";

  return keys.includes(key) ? null : console.error(err);
};

exports.names = names;
exports.duration = duration;
exports.timingFunction = timingFunction;
exports.propValidators = propValidators;