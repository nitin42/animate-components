# Usage
Let's take an example -

```javascript
import React, { Component } from 'react';

import { Entrance } from 'animate-components';

class App extends Component {
  render () {
    return (
      <Entrance duration='4s' timingFunction='ease-in' as='h1'>
        Hello World
      </Entrance>
    )
  }
}

```

The animation component can takes these props:

### duration
It defines seconds or milliseconds an animation takes to complete one cycle.

```javascript

<Entrance duration="2s">

```
### delay
Specifies a delay for the start of an animation.

```javascript

<Entrance delay="2s">

```
### timingFunction
Specifies the speed curve of the animation.

```javascript

<Entrance timingFunction="ease-in">

```
### direction
This prop lets an animation run in reverse direction or alternate cycles.

```javascript

<Entrance direction="reverse">

```
### iterations
Specifies the number of times an animation should run.

```javascript

<Entrance iterations="2">

```
### backfaceVisible
This prop defines whether an element should be visible when not facing the screen or not.

```javascript

<Entrance backfaceVisible="visible">

```
### fillMode
Specifies a style for the element when the animation is not playing.

```javascript

<Entrance fillMode="forward">

```
### playState
Specifies whether the animation is running or paused.

```javascript

<Entrance playState="running">

```
### as
An element type to render as using the prop `as`.

```javascript

<Entrance duration="3s" as="h1">
  Hello World
</Entrance>
```

outputs

```html
<h1 style={...} other={...}>
  Hello World
</h1>
```

### component
A React component to render and apply animation on.

```javascript
// App.js

let App = () => {
  return (
    <h1>
      Clay Jansen
    </h1>
  );
}
```

```javascript
// Main component

import React, { Component } from 'react';
import { FadeIn } from 'animate-components';

import App from './App';

class Main extends Component {
  render () {
    return (
      <FadeIn className="main" as="div" duration="3s" component={App} />
    );
  }
}
```

> Note - You can also pass all the [html attributes](https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributes) supported by React to the animation component along with the component props. Check [this](https://github.com/nitin42/animate-components/blob/master/examples/App.js) example.

### Multistep animations
Perform multistep animation (release [V0.8.0](https://github.com/nitin42/animate-components/releases/tag/0.8.0)).

Example -

```html
<Merge
  one={{ name: fadeIn, duration: '2s' }}
  two={{ name: slideUp, duration: '2s', timingFunction: 'ease-in' }}
>
  <h1>Tired of hello world!</h1>
</Merge>
```

See the full api for `<Merge />` component [here](https://github.com/nitin42/animate-components/blob/master/docs/api.md).

### Delay rendering
Delay rendering and animation of a component (because it seems weird when the component is rendered by React but animation has a delay of some seconds)

Example -

```javascript
import React from 'react';
import App from './App';

let Example = () => {
  return (
    <Delay timeout={4000}>
      <FadeIn className="main" as="h1" duration="3s" component={App} />
    </Delay>
  );
}
```

When and why to use ? Read [here](https://github.com/nitin42/animate-components/blob/master/examples/delay.js)

### Usage with styled-components
```javascript

import { fadeIn } from 'animate-components';

import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 1.2em;
  margin-left: 10px;
  color: yellow;
  transition: color 3s;
  &:hover {
    color: red;
    transform: ${fadeIn}
  }
`;

```

Or if you are using `<Merge />` component,

```javascript

const animationOne = keyframes`
 ...some rules
`;

const animationTwo = keyframes`
 ...some rules
`;

<Merge
  one={{ name: animationOne, duration: '4s' }}
  two={{ name: animationTwo, duration: '2s' }}
  as='h1'
>
  Hello World
</Merge>

```

### Usage with Aphrodite
```javascript
import { fadeIn } from 'animate-components';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Fade: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
```

### Usage with glamor
```javascript
import { fadeIn } from 'animate-components';

import { css } from 'glamor';

let rule = css({
  fontSize: '1.2em',
  marginLeft: '10px',
  color: 'yellow',
  transition: 'color 3s',
  ':hover': {
    color: 'red',
    transform: fadeIn
  }
});
```
