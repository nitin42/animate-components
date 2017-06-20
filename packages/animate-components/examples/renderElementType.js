import React from "react";

import { Merge, FadeIn } from "animate-components";
import { fadeIn, slideUp } from "animate-keyframes";

let App = () => {
  return (
    <div>
      <Merge
        one={{ name: fadeIn, duration: "3s", timingFunction: "ease-in" }}
        two={{ name: slideUp, duration: "2s", timingFunction: "ease-out" }}
        as="h1"
      >
        Hello world!
      </Merge>
      <br />
      <FadeIn duration="4s" as="h1">
        I love Katherine Langford.
      </FadeIn>
    </div>
  );
};

export default App;
