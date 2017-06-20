import React from "react";

import {
  Flash,
  FadeIn,
  Merge,
  Delay,
  Disappear,
} from "../packages/animate-components/dist/animate-components.min.js";
import { fadeIn, slideUp } from "animate-keyframes";
import Comp from "./comp";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <FadeIn
          style={{ fontSize: "3em" }}
          className="main"
          duration="4s"
          component={Comp}
        />
        <Flash
          duration="3s"
          timingFunction="ease-out"
          iterations="infinite"
          forceInterpolate={{ steps: 4, direction: "start" }}
          as="h1"
        >
          Hello
        </Flash>
        <Delay timeout={4000}>
          <FadeIn>Hello World</FadeIn>
        </Delay>
        <Flash duration="2s" iterations="infinite" as="h1">
          WAAAAAAAAAAAAAAAOOO!!
        </Flash>
        <FadeIn as="h2">
          <h2>Hello World</h2>
        </FadeIn> */}
        <Disappear name={slideUp} duration="4s" as="div" timingFunction="ease-out">
          <h1>I will disappear</h1>
        </Disappear>
      </div>
    );
  }
}

export default App;


// Error boundaries
// Code Refactor
// Test all the animations and properties
