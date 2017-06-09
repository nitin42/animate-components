import React from "react";

import { Flash } from "../dist/animate-components.min.js";

import Comp from './comp';

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Flash duration="3s" as="h1" iterations="infinite" style={{ color: '#ff8080' }}>
          <h1>Animate Components</h1>
        </Flash>
      </div>
    );
  }
}

export default App; 
