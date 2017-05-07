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

### Multistep animations

```javascript
render () {
  return (
    <Merge one={{ name: fadeIn, dr: '2s' }} two={{ name: slideUp, dr: '2s', tf: 'ease-in' }}>
      <h1>Hello world!</h1>
    </Merge>
  );
}
```

