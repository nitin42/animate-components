# Animate Components
![website](https://img.shields.io/badge/website-up-brightgreen.svg)
![version](https://img.shields.io/badge/animate--components-1.1.9-brightgreen.svg)
![gzip](https://img.shields.io/badge/gzip%20size-9.09%20KB-brightgreen.svg)
![size](https://img.shields.io/badge/size-58.8%20KB-brightgreen.svg)

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

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/animate-components@1.1.9/dist/animate-components.min.js"></script>
```

## Features

* Component based
* Supports all the animation properties
* Merge two animations to create one.
* Isolated keyframes (use with styled-components, aphrodite and glamor)
* Ratifies DOM nesting
* Element type rendering of components using `as` prop
* Add all the html attributes supported by React along with component props.

## Why ?

* Ease of doing animations (purely component based).
* Simplified and minimal API.
* Best source for someone who is new to React (folks are already enjoying the ease of doing animations).
* Supports element type rendering of an animation component (interesting tweak).
* Provides isolated keyframes so that you don't have to hardcode all the curves and directly use them with css-in-js solutions like [glamor](https://github.com/threepointone/glamor), [styled-components](https://github.com/styled-components/styled-components), [Aphrodite](https://github.com/Khan/aphrodite) etc.

## Tasks

[Tasklist](https://github.com/nitin42/animate-components/blob/master/tasks.md)

## Docs
Check the complete documentation [here](./docs).

## Animations

Below is a list of all available animations (Components).

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
