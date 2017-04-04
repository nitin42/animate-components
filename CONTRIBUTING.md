# Contributing Guide

It would be super exciting if you want to contribute to `animate-components`. To create an animation component,

* Create two files for eg `newAnimation.js` & `styledNewAnimation.js`.

* Define the keyframes for the animation in `styledNewAnimation.js` using [styled-components](https://github.com/styled-components/styled-components).

```javascript
// styledNewAnimation.js

import { keyframes } from 'styled-components';

const newAnimation = keyframes`
  from {
  
  }
  
  to {
  
  }
`;
```

You can also create the keyframes in `newAnimation.js` and directly use it instead of creating `styledNewAnimation.js` but it would not be handy for creating multiple keyframes.

* Export the newAnimation.

```javascript
// styledNewAnimation.js

export default newAnimation;
```

* Import the [high order component](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e) present in the **animation** folder. You can find it [here](https://github.com/nitin42/animate-components/blob/master/src/animations/HOC.js).

* Export the component like this

```javascript
// newAnimation.js

import { newAnimation } from './styledNewAnimation';

import HOC from './HOC'; // High Order Component

export default HOC('NewAnimation', newAnimation); // Creates the component
```

Note that HOC takes two arguments, one is the name of your component and the other is the keyframe defined for the animation.

If you want to create multiple animation components, create a single object and export it like this

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

* Lastly import the above object (`newAnimationObj`) in [main.js](https://github.com/nitin42/animate-components/blob/master/main.js) and extract all the components from it. For eg

```javascript
// main.js

import newAnimationObj from './newAnimation';

const { NewAnimation, NewAnimationTwo, NewAnimationThree } = newAnimationObj;

export {
  NewAnimation,
  NewAnimationTwo,
  NewAnimationThree
}
```

Generate the build using

```
npm run build
```

Also check [this](https://github.com/nitin42/animate-components/blob/master/Todo.md) todo list for the project if you want to contribute further.

That's it ! I'm excited to see your pull request.

There's lot to be done. Thanks ❤️
