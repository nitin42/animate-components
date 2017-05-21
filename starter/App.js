import React, { Component } from "react";

import { FadeIn, Merge, left, rotateIn, RotateIn } from "../index";

export default class App extends Component {
  render() {
    return (
      <div>
        <FadeIn
          duration="7s"
          as="h1"
        >
          Bye Bye React !
        </FadeIn>
        <br/>
        <FadeIn
          duration="3s"
          as="h2"
          forceInterpolate={{ steps: 4, direction: "start" }}
        >
          Hello Angular!
        </FadeIn>
        <Merge
          one={{ name: left, duration: "4s", timingFunction: "ease-in" }}
          two={{ name: rotateIn, duration: "6s", timingFunction: "ease-out" }}
          as="h1"
        >
          <h1>Hello World!</h1>
        </Merge>
      </div>
    );
  }
}
