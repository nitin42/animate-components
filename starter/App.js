import React, { Component } from "react";

import Merge from "../src/animations/merge";

import { fadeIn, slideUp } from "../main";
import { FadeIn, RotateIn } from "../main";

export default class App extends Component {
  render() {
    return (
      <div>
        <Merge two={{ name: fadeIn }} one={{ name: slideUp }} as="h1111">
          Hello
        </Merge>
        <RotateIn duration="7s" as="h2">
          World
        </RotateIn>
      </div>
    );
  }
}
