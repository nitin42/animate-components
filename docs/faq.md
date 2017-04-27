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
      </Merge>
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
With the new release (V0.8.0), `animate-components` now supports multistep animations.

Refer to the [api](https://github.com/nitin42/animate-components/blob/master/docs/api.md) for multistep animations for more info.

### I want to use css instead
You can also use minified copy of css which is available via cdn.

```html
<link rel="stylesheet" href="https://unpkg.com/animate-components@0.7.2/css/animate-components.min.css">
```

### Transitions support
Handling transitions via `animate-components` is currently not supported. Hopefully in future ? 
