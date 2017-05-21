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
| **one**      | object | { name: "", duration: "2s", timingFunction: "ease-in" } |
| **two**      | object      |   { name: "", duration: "3s", timingFunction: "ease-out" } |
| **as** | string      |   div |

`<Merge />`

```javascript
import { fadeIn, slideUp } from 'animate-components';

<Merge one={{ name: fadeIn, duration: '2s', timingFunction: 'ease-in' }} two={{ name: slideUp, duration: '2s', timingFunction: 'ease-out' }}>
  <h1>Hello World</h1>
</Merge>
```

## Importing animation components and keyframes

To use any animation component,

```javascript
import { FadeIn } from 'animate-components';
```

To use animation name (keyframes) in `<Merge />` component or for any other use case
> camelCase convention.
```javascript
import { fadeIn } from 'animate-components';
```

To import `<Merge />` component,

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

## Validates DOM Nesting

Animate Components validates the DOM nesting of the elements. For eg -

```javascript
<FadeIn duration="3s" as="h1">
  <h1>Hello World!</h1>
</FadeIn>
```

Here the children type and the one passed to prop `as` is **'h1'**. To avoid this nesting problem, the prop value for `as` will change back to `div`.
