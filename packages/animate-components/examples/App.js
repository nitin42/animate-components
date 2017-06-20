import React, { Component } from 'react';

import { FadeIn } from 'animate-components';

// import './some_css.css';

class App extends Component {
  render () {
    return (
      <FadeIn className="main" duration="4s" as="a" href="https://www.google.com">
        Click here to redirect
      </FadeIn>
    );
  }
}

export default App;
