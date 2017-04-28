# Animate Components
![downloads](https://img.shields.io/badge/downloads-3k-brightgreen.svg)
![website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?maxAge=2592000)
![dependencies](https://img.shields.io/versioneye/d/ruby/rails.svg?maxAge=2592000)
![version](https://img.shields.io/badge/animate--components-0.8.0-brightgreen.svg)

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
yarn add animate-components --save
```

**bower**

```
bower install animate-components
```

or use a cdn version hosted by [unpkg](https://unpkg.com/#/)

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/animate-components@0.7.2/css/animate-components.min.css">
</head>
```
and then add class or className `animate` to the element you want to animate. 

Example - 

```html
<div className="animate fadeIn">
  <h1>Hello World</h1>
</div>
```

> Note - The list of all the animations is given below just remember to use **camelCase** convention when adding animation name to the class (not for the **React Components**). You should use [animate.css](https://daneden.github.io/animate.css/) instead for trying animations like **Bounce**, **Fade**, **Flip**, **lightspeed** and **Rotate**.

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
