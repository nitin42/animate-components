import React from "react";

import { fadeIn, slideDown, Merge, FadeIn, PuffIn, Bounce,  } from "../index";

let App = () => {
  return (
    <div>
      <Merge
        one={{ name: fadeIn, duration: '3s', timingFunction: 'ease-in' }}
        two={{ name: slideDown, duration: '1s', timingFunction: 'ease-out' }}
        as="h1"
      >
        hello World
      </Merge>
      <br/>
      <FadeIn
        duration="3s"
        forceInterpolate={{ steps: 4, direction: 'start'}}
        as="h1"
      >
        Hello World
      </FadeIn>
      <br/>
      <FadeIn
        duration="5s"
        as="h3"
      >
        Bye Bye
      </FadeIn>
    </div>
  );
};

export default App;
