# Animate Components
![downloads](https://img.shields.io/badge/downloads-3k-brightgreen.svg)
![website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?maxAge=2592000)
![version](https://img.shields.io/badge/animate--components-1.1.7-brightgreen.svg)

<p align="center">
	<img src="https://i.gyazo.com/64801677fb24b4492eb0b90870ead297.gif" />
</p>

> ***Elemental components for doing animations in React***

## Install

**npm**

```
npm install animate-components --save
```

**yarn**

```
yarn add animate-components
```

## Features

* Component based
* Supports all the animation properties
* Use with styled-components, Aphrodite and glamor
* Create a new animation using `<Merge />`
* Isolated keyframes
* Ratifies DOM nesting
* Element type rendering of components using `as` prop
* Add all the html attributes supported by React along with component props.
* Render a component in isolation and apply animations on it. 

## Why ?

* Ease of doing animations (purely component based).
* Simplified and minimal API.
* Best source for someone who is new to React (folks are already enjoying the ease of doing animations).
* Supports element type rendering of an animation component (interesting tweak).
* Provides isolated keyframes so that you don't have to hardcode all the curves and directly use them with css-in-js solutions like [glamor](https://github.com/threepointone/glamor), [styled-components](https://github.com/styled-components/styled-components), [Aphrodite](https://github.com/Khan/aphrodite) etc.

Enough ?

## Current status

* Reducing build size.
* New animations

So keep checking in 😄 !

## Docs
Check the complete documentation [here](./docs).

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

## 🚀 New
### Perspective

* `PDown`
* `PUp` 
* `PLeft`
* `PRight`

### Bingo

* `PuffOut`
* `PuffIn`
* `VanishOut`
* `VanishIn`

### Expanse (in space)

* `ExpanseUp`
* `ExpanseDown`
* `ExpanseLeft`
* `ExpanseRight`

## Other animation libraries (css)

* [Animate.css](https://daneden.github.io/animate.css/)
* [CSShake](http://elrumordelaluz.github.io/csshake/#1)
* [Magic](https://minimamente.com/example/magic_animations/)
