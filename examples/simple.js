import React from 'react';

import { FadeIn } from 'animate-components';

let App = () => {
  return (
    <div>
      <FadeIn duration="2s" timingFunction="ease-out">
        <p>Hello world!</p>
      </FadeIn>
    </div>
  );
}

export default App
