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
| **block** | boolean      |    |

#### Props for `<Merge />` component

| Props        | Type           | Default  |
| ------------- |:-------------:| -----:|
| **one**      | object | { name: "", dr: "2s", tf: "ease" } |
| **two**      | object      |   { name: "", dr: "2s", tf: "ease" } |
| **block** | boolean      |    |

`<Merge />`

```javascript
import { fadeIn, slideUp } from 'animate-components';

<Merge one={{ name: fadeIn, dr: "2s", tf: "ease" }} two={{ name: slideUp, dr: "2s", tf: "ease" }}>
  <h1>Hello World</h1>
</Merge>
```

`one` && `two` (object)

```
name: [animation-name] [string] [''],
dr: [animation-duration] [string] ['2s'],
tf: [animation-timing-function] [string] ['ease']
```

> Note - Currently you can only pass three props to `<Merge />` component. (will support more in next release)

Read more about the `block` prop [here](faq.md)

## Importing animation components and animations

To use any animation component,

```javascript
import { FadeIn } from 'animate-components';
```

To use animation name in `<Merge />` component or for any other use cases, this follows camelCase convention.

```javascript
import { fadeIn } from 'animate-components';
```

To use `<Merge />`,

```javascript
import { Merge } from 'animate-components';

let App = () => {
  return (
    <Merge one={...}  two={...}>
      <h1>Hi!</h1>
    </Merge>
  );
}
```
