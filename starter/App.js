import React, { Component } from "react";

import Merge from "../src/animations/merge";

import { left, bounce } from "../main";
import { FadeIn, RotateIn } from "../main";

export default class App extends Component {
  render() {
    return (
      <div>
        <FadeIn duration="8s" as="h1">
          Hello
        </FadeIn>
      </div>
    );
  }
}
