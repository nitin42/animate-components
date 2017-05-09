import React from 'react';

import { fadeIn, slideUp, Merge, FadeIn } from 'animate-components';

let App = () => {
  return (
    <div>
      <Merge one={{ name: fadeIn, dr: "3s", tf: "ease-in" }} two={{ name: slideUp, dr: "2s", tf: "ease-out" }} as="h1">
        Hello world!
      </Merge>
      <br/>
      <FadeIn duration="4s" as="h1">
        I love Katherine Langford.
      </FadeIn>
    </div>
  );
}

export default App
