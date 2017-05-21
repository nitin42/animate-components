import React from "react";

import { fadeIn, slideUp, Merge } from "animate-components";

let App = () => {
  return (
    <div>
      <Merge
        one={{ name: fadeIn, duration: "3s", timingFunction: "ease-in" }}
        two={{ name: slideUp, duration: "2s", timingFunction: "ease-out" }}
      >
        <p>Hello world!</p>
      </Merge>
    </div>
  );
};

export default App;
