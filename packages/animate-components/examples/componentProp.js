import React, { Component } from "react";

import { LightOut } from "../index";
import Comp from "./comp";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Using `component` prop</h1>
        <LightOut
          duration="4s"
          as="h2"
          component={Comp}
        />
      </div>
    );
  }
}

export default App;
