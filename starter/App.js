import React from "react";

import { fadeIn, slideDown, Merge, FadeIn, ExpanseUp, PuffIn, Delay, LightOut } from "../dist/animate-components.min.js";

import Comp from './comp';

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Delay timeout={4000}>
          <FadeIn duration="3s" as="h1" component={Comp} />
        </Delay>
      </div>
    );
  }
}

export default App;

/**

New feature

- Delay rendering of components along with the animation Because it seems weird when component
has been rendered by React but animations are delayed. This will keep both in sync and will be
processed through the timeout prop (type: Number). Though this won't be replacing the delay
attribute of an animation but its an addon for existing library.

- timeout prop
=> set this prop after the component has been mounted with a boolean state variable
=> Implement this feature for only high order component container's components (Animation Component)
=> Rendering process for the component class will change




*/
