# API Reference

#### Props for animation component

| Props        | Type           | Default  |
| ------------- |:-------------:| -----:|
| **duration**      | string | 1s |
| **timingFunction**      | string      |   ease |
| **delay** | string      |    0s |
| **direction** | string      |    normal |
| **iterations** | string      |    1 |
| **backfaceVisible** | string      |    visible |
| **fillMode** | string      |    none |
| **playState** | string      |    running |
| **forceInterpolate** | object      |    { } |
| **as** | string      | div   |


#### Props for `<Merge />` component

| Props        | Type           | Default  |
| ------------- |:-------------:| -----:|
| **one**      | object | { name: " ", duration: "2s", timingFunction: "ease-in" } |
| **two**      | object      |   { name: " ", duration: "3s", timingFunction: "ease-out" } |
| **as** | string      |   div |

`<Merge />` 

```javascript
import { fadeIn, slideUp } from 'animate-components';

<Merge 
  one={{ name: fadeIn, duration: '2s', timingFunction: 'ease-in' }} 
  two={{ name: slideUp, duration: '2s', timingFunction: 'ease-out' }}
>
  <h1>Hello World</h1>
</Merge>
```

**You can also pass all the [html attributes](https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributes) supported by React to the animation component along with above props for the component. Check [this](https://github.com/nitin42/animate-components/blob/master/examples/App.js) example.**

## Importing animation components and keyframes

Import animation component,

```javascript
import { FadeIn } from 'animate-components';
```

Import keyframes (useful if you're using `<Merge />` component). Follows camelCase convention 

```javascript
import { fadeIn } from 'animate-components';
```

Import `<Merge />` component,

``` javascript
import { Merge } from 'animate-components';

let App = () => {
  return (
    <Merge one={...}  two={...}>
      <h1>Hi!</h1>
    </Merge>
  );
}
```

## An element type to render as (string)

An element type to render as. Eg -

```javascript
<FadeIn duration="3s" as="h2">
  Hello World
</FadeIn>
```

outputs

```html
<h2 style={...} other={...}>
  Hello World
</h2>
```

## Validate DOM Nesting

Animate Components validate the DOM nesting of the elements by comparing the prop `as` and the child type. For eg -

```javascript
<FadeIn duration="3s" as="h1">
  <h1>Hello World!</h1>
</FadeIn>
```

Here the children type and the one passed to prop `as` is **'h1'**. To avoid this nesting problem, the prop value for `as` will change back to `div`.

## Force interpolation of animations
Pass **steps(steps, start|end)** using `forceInterpolate` prop. For example - 

```javascript
<FadeIn duration="3s" forceInterpolate={{ steps: 4, direction: "start" }} as="h1">
  Hello World! 
</FadeIn>
```
