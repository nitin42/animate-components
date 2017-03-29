# Animate Components

> ***Elemental components for animation in React***

## Install

```
npm install animate-components --save
```

## Usage

```javascript
import React, { Component } from 'react';

import { Swing } from 'animate-components';

class App extends Component {
  render() {
    return (
      <div>
        <Swing>
          <h1>Hello</h1>
        </Swing>
      </div>
    );
  }
}
```

## Animations

Below is a list of all available animations.

### Bounce

* `Bounce`
* `BounceUp`
* `BounceRight`
* `BounceLeft`
* `BounceDown`

### Fade

* `FadeIn`
* `FadeInUp`
* `FadeInRight`
* `FadeInLeft`
* `FadeInDown`
* `FadeInUpBig`
* `FadeInLeftBig`
* `FadeInRightBig`

### Flip

* `Flip`
* `FlipX`
* `FlipY`

### LightSpeed

* `LightOut`
* `LightIn`

### Rotate

* `RotateIn`
* `RotateRight`
* `RotateLeft`
* `RotateUpRight`
* `RotateUpLeft`

### Slide

* `SlideUp`
* `SlideDown`
* `SlideLeft`
* `SlideRight`
* `SlideExpandUp`

### Special

* `Flash`
* `RollOut`
* `RollIn`
* `Rubber`
* `Swing`
* `Zoom`
* `Hinge`
* `Pulse`
* `ExpandUp`
* `Entrance`
* `Hatch`

## API

Props

**duration**

Type: `string`<br/>
Default: `1s`

**timingFunction**

Type: `string`<br/>
Default: `ease`

**delay**

Type: `string`<br/>
Default: `0s`

**direction**

Type: `string`<br/>
Default: `normal`

**iterations**

Type: `string`<br/>
Default: `1`

**backfaceVisibility**

Type: `string`<br/>
Default: `visible`

### Example

```javascript
<BounceUp duration="2s" timingFunction="ease-in" iterations="3">
  <h1>Hello World</h1>
</BounceUp>
```

## Contributing

Here is the [guide](https://github.com/nitin42/animate-components/blob/master/CONTRIBUTING.md).

**More animations coming soon 😃** !!
