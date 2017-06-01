import React from "react";

import { fadeIn, slideDown, Merge, FadeIn, ExpanseUp, PuffIn, LightOut } from "../index";

import Comp from './comp';

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Using component prop</h1>
        <Merge
          one={{ name: fadeIn, duration: "3s", timingFunction: "ease-in" }}
          two={{ name: slideDown, duration: "6s", timingFunction: "ease-out" }}
          component={Comp}
          className="main"
        />
        <br />
        <LightOut
          duration="4s"
          as="h2"
          component={Comp}
        />
        <br />
        <ExpanseUp duration="4s" component={Comp} />
        <br/>
        <h1>Using components</h1>
        <Merge
          one={{ name: fadeIn, duration: "3s", timingFunction: "ease-in" }}
          two={{ name: slideDown, duration: "6s", timingFunction: "ease-out" }}
          className="main"
        >
          <Comp />
        </Merge>
        <br />
        <LightOut
          duration="4s"
          as="h2"
        >
          <Comp />
        </LightOut>
        <br />
        <ExpanseUp duration="4s">
          <Comp />
        </ExpanseUp>
        <PuffIn duration="3s" as="h1" component={Comp} />
      </div>
    );
  }
}

export default App;
