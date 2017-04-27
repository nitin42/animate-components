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

```html
<Merge one={{ name: "fadeIn", dr: "2s", tf: "ease" }} two={{ name: "slideUp", dr: "2s", tf: "ease" }}>
  <h1>Hello World</h1>
</Merge>
```

`one` && `two` (object)

```
name: [string] [''],
dr: [string] ['2s'],
tf: [string] ['ease']
```

> Note - Currently you can only pass three props to `<Merge />` component. (will support more in next release)

Read more about the `block` prop [here](faq.md)
