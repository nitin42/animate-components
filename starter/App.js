import React, { Component } from 'react';
import glamorous from 'glamorous-native';
import reactPrimitives from 'react-primitives';

function createNative(componentConstructor, tag) {
  if (typeof tag !== 'string' && typeof tag !== 'function') {
    throw new Error(`Cannot create glamorous component for ${tag}`);
  }
  return componentConstructor(tag);
}

const composer = tag => createNative(glamorous, tag)

const NativeAlias = composer(reactPrimitives['View']);

const StyledView = NativeAlias({ color: 'red', fontSize: '1.3em' });

class App extends Component {
  render() {
    return (
      <StyledView>
        Hello
      </StyledView>
    );
  }
}

export default App;
