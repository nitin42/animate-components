# Some tips

### Negative Animation Delay

Say you want to animate some elements but you don't want all the elements to start at the exact same position. Use negative delay for those elements.

`animation-delay: -2s`

### Use `component` prop

Use `component` prop when you want to render a component and apply animations on it.

```javascript
// Without component prop
<FadeIn className="main" duration="3s">
  <div>
    <App />
  </div>
</FadeIn>
```

```javascript
// With component prop
<FadeIn className="main" duration="3s" as="div" component={App} />
```

Both `Merge` and an animation component support `component` prop. Shorthand right ?

### Merge two animations

Merge two animations using `<Merge />` to create one.

```html
<Merge
  one={{ name: fadeIn, duration: '2s', timingFunction: 'ease-in' }}
  two={{ name: slideUp, duration: '3s', timingFunction: 'ease-out' }}
  as="h1
>
  Hello world!
</Merge>
```

### Force interpolations

Pass steps(step, start|end) to animation component using prop `forceInterpolate`.

```html
<FadeIn forceInterpolate={{ steps: '4', direction: 'start' }}>
  Hello
</FadeIn>
```

### Render as an element type

Use prop `as` to render as an element type.

```html
<FadeIn as="h2">
  Hello
</FadeIn>
```

### Using html attributes along with the component props

```javascript
<FadeIn
  className="main"
  as="a"
  href="https://www.github.com"
  target="_blank"
  duration="3s"
  timingFunction="ease-in"
>
  Click here to redirect
</FadeIn>

```

### Delay both component rendering and animations

[Example](https://github.com/nitin42/animate-components/blob/master/examples/delay.js)
