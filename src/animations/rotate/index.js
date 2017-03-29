import {
  rotateIn,
  rotateLeft,
  rotateRight,
  rotateUpRight,
  rotateUpLeft
} from "./styledRotate";

import HOC from "../HOC";

// Rotating animation components
const rotateObj = {
  RotateIn: HOC("RotateIn", rotateIn),
  RotateLeft: HOC("RotateLeft", rotateLeft),
  RotateRight: HOC("RotateRight", rotateRight),
  RotateUpLeft: HOC("RotateUpLeft", rotateUpLeft),
  RotateUpRight: HOC("RotateUpRight", rotateUpRight)
};

export default rotateObj;