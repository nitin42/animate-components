import React from 'react';

import { fadeIn, slideUp, Merge } from 'animate-components';

let App = () => {
  return (
    <div>
      <Merge one={{ name: fadeIn, dr: "3s", tf: "ease-in" }} two={{ name: slideUp, dr: "2s", tf: "ease-out" }}>
        <p>Hello world!</p>
      </Merge>
    </div>
  );
}

export default App
