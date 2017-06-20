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
| **component** | function      | -   |


#### Props for `<Merge />` component

| Props        | Type           | Default  |
| ------------- |:-------------:| -----:|
| **one**      | object | { name: " ", duration: "2s", timingFunction: "ease-in" } |
| **two**      | object      |   { name: " ", duration: "3s", timingFunction: "ease-out" } |
| **as** | string      |   div |
| **component** | function      |   - |

#### Props for `<Delay />` component
| Props        | Type           | Default  |
| ------------- |:-------------:| -----:|
| **timeout**      | number | 4ms |

#### Props for `<Disappear />` component
| Props        | Type           | Default  |
| ------------- |:-------------:| -----:|
| **name**      | string | `fadeIn` |
| **duration**      | string | "2s" |
| **as**      | string | "div" |
| **timingFunction**      | string | "ease" |
| **component**      | function | - |

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

## DOM Nesting

Animate Components ratifies the DOM nesting of the same elements by comparing the prop `as` and the child type. For eg -

```javascript
<FadeIn duration="3s" as="h1">
  <h1>Hello World!</h1>
</FadeIn>
```

Here the element type for the children and the one passed to prop `as` is **'h1'**. Thereby prop value for `as` will change back to `div`(useful in some cases).

## Force interpolation of animations
Pass **steps(steps, start|end)** using `forceInterpolate` prop. For example -

```javascript
<FadeIn duration="3s" forceInterpolate={{ steps: 4, direction: "start" }} as="h1">
  Hello World!
</FadeIn>
```
