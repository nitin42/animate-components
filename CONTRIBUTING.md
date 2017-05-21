## Contributing Guide


It would be super exciting if you want to contribute to `animate-components`.

### Creating animation components
To create an animation component, create two new files. For example -  `newAnimation.js` & `styledNewAnimation.js` in `src` directory.

Define the keyframes for the animation in `styledNewAnimation.js` using [styled-components](https://github.com/styled-components/styled-components).

```javascript
// styledNewAnimation.js

import { keyframes } from 'styled-components';

const newAnimation = keyframes`
  from {
  
  }
  
  to {
  
  }
`;

export default newAnimation;
```

The reason we require `styledNewAnimation.js` is to isolate the styles from the components. Makes the code readable and easy to test.

Import the [high order component](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e) present in the **animation** folder. You can find it [here](https://github.com/nitin42/animate-components/blob/master/src/animations/HOC.js).

Export the component like this,

```javascript
// newAnimation.js

import { newAnimation } from './styledNewAnimation';

import HOC from '../../containers/HOC'; // High Order Component

export default HOC('NewAnimation', newAnimation); // Creates the component
```

> Note - HOC takes two arguments, one is the name of your component and the other is the keyframe defined for the animation.

<br/>
If you want to create multiple animation components, create a single object and export it.

```javascript
// newAnimation.js

import {newAnimation, newAnimationTwo, newAnimationThree } from './styledNewAnimation';

import HOC from './HOC';

const newAnimationObj = {
  NewAnimation: HOC('NewAnimation', newAnimation),
  NewAnimationTwo: HOC('NewAnimationTwo', newAnimationTwo),
  NewAnimationThree: HOC('NewAnimationThree', newAnimationThree)
};

export default newAnimationObj;
```

## Typechecking with Flow
Add type annotations to your components.

```javascript
// newAnimation.js

import {newAnimation, newAnimationTwo, newAnimationThree } from './styledNewAnimation';

import HOC from '../../containers/HOC';

import type { Components } from '../../../types';

const newAnimationObj: Components = {
  NewAnimation: HOC('NewAnimation', newAnimation),
  NewAnimationTwo: HOC('NewAnimationTwo', newAnimationTwo),
  NewAnimationThree: HOC('NewAnimationThree', newAnimationThree)
};

export default newAnimationObj;
```

Run `yarn flow`

## ESLint
Run `yarn lint`.


### Running the animations
There is a small [starter kit](https://github.com/nitin42/animate-components/tree/master/starter) kit for testing the animations.

```javascript
// ./starter/App.js

import React, { Component } from 'react';

import { ExpanseDown } from '../index';

export default class App extends Component {
  render () {
    return (
      <ExpanseDown duration="2s">
        <h1>Hello World</h1>
      </ExpanseDown>
    );
  }
}
```
Start the server using `yarn start` and you're ready to go.

That's it ! I'm excited to see your pull request.

There's lot to be done. Thanks ❤️

