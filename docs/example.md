# Examples

### Animating a group of children elements

```javascript
render () {
  return (
    <FadeIn duration="2s" timingFunction="ease-in" block>
      <h1>Hello World</p>
      <p>My name is Foo</p>
    </FadeIn>
  );
}
```

### Animating a single element in the tree

```javascript
render () {
  return (
    <div className="someclass">
      <h1>Hoggle</h1>
      <FadeIn>
        <input placeholder="search something...." />
      </FadeIn>
    </div>
  );
```

> Note - By default the component performs the animation with **inline display**. This may not work well where you have a group of elements. So it is recommended to use prop **`block`** to animate a group of children elements.
