# FAQs

### I want to change the element type
When you render the children elements under the animation component, it wraps them inside a `span` with **inline display** by default. To render a block level element instead of inline element, you can pass prop `block` to the component like this

```javascript
import React from 'react';

import { Entrance } from 'animate-components';

class App extends React.Component {
  render () {
    return (
      <Entrance duration="3s" block>
        <h1>Hello World!</h1>
      </Entrance>
    );
  }
}
```

This will give the output 

```html
<div data-reactroot style="position: relative; animation: joknde 3s ease 0s 1 normal none running; backface-visibility: visible;">
  <h1>Hello World!</h1>
</div>
```

Same goes with the `<Merge />` component. (renders `block` element by default)

```javascript
import React from 'react';

import { fadeIn, slideUp } from 'animate-components';

class App extends React.Component {
  render () {
    return (
      <Merge one={{ name: fadeIn, dr: '2s', tf: 'ease-in' }} two={{ name: slideUp, dr: '2s', tf: 'ease-out' }} inline>
        <h1>Hello World!</h1>
      </Entrance>
    );
  }
}
```

This will give the output

```html
<span data-reactroot="" style="display: inline-block; animation: dVMtpd 2s ease-in, bcCCNc 2s ease-in; backface-visibility: visible;">
  <h1>Hello</h1>
</span>
```

### Multistep animations 
You can nest one or more components to do multistep animations. It works but it is not the most efficient way to perform the multistep animations (I am working on it). For example - 

```javascript
<Entrance>
  <FadeIn duration="2s" delay="2s">
    <h1>Hello World</h1>
  </FadeIn>
</Entrance>
```

### I want to use css instead
You can also use minified copy of css which is available via cdn.

```html
<link rel="stylesheet" href="https://unpkg.com/animate-components@0.7.2/css/animate-components.min.css">
```

### Transitions support
Handling transitions via `animate-components` is currently not supported. Hopefully in future ? 
