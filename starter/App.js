import React from "react";

import { fadeIn, slideDown, Merge, FadeIn, ExpanseUp, PuffIn } from "../index";

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Merge
          one={{ name: fadeIn, duration: "3s", timingFunction: "ease-in" }}
          two={{ name: slideDown, duration: "6s", timingFunction: "ease-out" }}
          as="h1"
          style={{ color: "red" }}
        >
          Hello World
        </Merge>
        <br />
        <FadeIn
          duration="2s"
          as="strong"
          timingFunction="linear"
          direction="reverse"
        >
          Hello World
        </FadeIn>
        <br />
        <ExpanseUp duration="4s">
          World Hello
        </ExpanseUp>
      </div>
    );
  }
}

export default App;
