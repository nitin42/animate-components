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

An animation component can takes these props:

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
      Clay
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

## Merge Component
Perform multiple animations.

```javascript
import { Merge } from 'animate-components';
import { fadeIn, slideUp } from 'animate-keyframes';

<Merge
  one={{ name: fadeIn, duration: '2s', timingFunction: 'ease-in' }}
  two={{ name: slideUp, duration: '2s', timingFunction: 'ease-out' }}
  as="div"
>
  <h1>Hello World</h1>
</Merge>
```

## Disappear Component
Performs an animation and unmounts after the last-step (@keyframe).
```javascript
import { Disappear } from 'animate-components';
import { fadeIn } from 'animate-keyframes';

<Disappear name={fadeIn} as="div" duration="3s">
  <h1>Hello World</h1>
</Disappear>
```
> Note - You can also pass all the [html attributes](https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributes) supported by React to both the Merge and Disappear component along with the above props. Check [this](https://github.com/nitin42/animate-components/blob/master/packages/animate-components/examples/App.js) example.


## Delay Component
Delay both the rendering and animations. Detailed info [here](https://github.com/nitin42/animate-components/blob/master/packages/animate-components/examples/delay.js).


## Usage with styled-components
```javascript

import { fadeIn } from 'animate-keyframes';

import styled from 'styled-components';

const Heading = styled.h1`
  display: inline-block;
  animation: ${fadeIn} 2s ease-in;
  padding: 2rem 3rem;
  font-size: 1.2rem;
`;

```

Or if you are using `<Merge />` component,

```javascript
import { Merge } from 'animate-components';

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

## Usage with Aphrodite
```javascript
import { fadeIn } from 'animate-keyframes';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Fade: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
```

## Usage with glamor
```javascript
import { fadeIn } from 'animate-keyframes';

import { css } from 'glamor';

let rule = css({
  display: 'inline-block',
  animation: `${fadeIn} 2s ease-in`,
  padding: '2rem 3rem',
  font-size: '1.2rem'
});
```
