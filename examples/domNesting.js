import React from "react";

import { FadeIn } from "animate-components";

// The FadeIn component will validate the DOM nesting if the child element tag is similar to the one passed to prop `as`
let App = () => {
  return (
    <div>
      <FadeIn duration="2s" timingFunction="ease-out" as="h1">
        <h1>Hello world!</h1>
      </FadeIn>
    </div>
  );
};

export default App;
