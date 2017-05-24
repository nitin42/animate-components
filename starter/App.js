import React from "react";

import { fadeIn, slideDown, Merge, FadeIn, PuffIn, Bounce } from "../index";

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <FadeIn className="main" duration="4s" as="h1" style={{ color: 'blue' }}>
          Hello World!  
        </FadeIn>
      </div>
    );
  }
}

export default App;
