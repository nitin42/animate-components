# Usage

<p align="center">
	<img src="https://gyazo.com/9fc95209d4a04c636b7af98711cd0df3.png" />
</p>

The animation component can takes these props:

### duration 
It defines how many seconds or milliseconds an animation takes to complete one cycle.

```javascript

<Entrance duration="2s">

```
### delay 
Specifies a delay for the start of an animation.

```javascript

<Entrance delay="2s">

```
### timingFunction 
Specifies the speed curve of the animation.

```javascript

<Entrance timingFunction="ease-in">

```
### direction
This prop is used to let an animation run in reverse direction or alternate cycles.

```javascript

<Entrance direction="reverse">

```
### iterations
Specifies the number of times an animation should run.

```javascript

<Entrance iterations="2">

```
### backfaceVisible
It defines whether or not an element should be visible when not facing the screen.

```javascript

<Entrance backfaceVisible="visible">

```
### fillMode
Specifies a style for the element when the animation is not playing.

```javascript

<Entrance fillMode="forward">

```
### playState
Specifies whether the animation is running or paused.

```javascript

<Entrance playState="running">

```
### block
Specifies whether to render the component and its children in `<div>` wrapper with the display `display: block`.

```javascript

<Entrance block>
  <h1>
    Hello World
  </h1>
</Entrance>

```

### Using CSS 
You can also use minified copy of the css file which is available via cdn or you can manually download and specify the stylesheet.

Example - 

```html
<div className="animate entrance">
  <h1>Hello World</h1>
</div>
```

Add class `animate` to the element you want to animate.
