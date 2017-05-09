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
| **as** | string      | div   |

#### Props for `<Merge />` component

| Props        | Type           | Default  |
| ------------- |:-------------:| -----:|
| **one**      | object | { name: "", dr: "2s", tf: "ease" } |
| **two**      | object      |   { name: "", dr: "2s", tf: "ease" } |
| **as** | string      |   div |

`<Merge />`

```javascript
import { fadeIn, slideUp } from 'animate-components';

<Merge one={{ name: fadeIn, dr: '2s', tf: 'ease' }} two={{ name: slideUp, dr: '2s', tf: 'ease' }}>
  <h1>Hello World</h1>
</Merge>
```

```
name -> animation-name
dr -> animation-duration
tf -> animation-timing-function
```

Read more about the `block` prop [here](faq.md)

## Importing animation components and animations

To use any animation component,

```javascript
import { FadeIn } from 'animate-components';
```

To use animation name (keyframe rules) in `<Merge />` component or for any other use cases
> Follows camelCase convention.
```javascript
import { fadeIn } from 'animate-components';
```

To use `<Merge />` component,

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

Use prop `as` to render the component with any element (valid). Eg - 

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
