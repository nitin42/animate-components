/**

- Delay rendering and animations

Use `<Delay />` when you want to delay both the animation and component rendering. When using
prop `delay="3s"`, animations are delayed but the component is already rendered. This looks weird in some
cases. `<Delay />` component will keep both in sync !

- Event queuing model

`<Delay />` being asynchronous, takes the children component (animation component or any other component)
which would be queued up for execution after the timeout has expired.

*/


import React, { Component } from "react";
import { FadeIn, Delay } from "animate-components";

import Comp from './comp';

class App extends Component {
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
