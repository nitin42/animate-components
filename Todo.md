# Todo

- [ ] Single object for all the props. For eg

```javascript
render () {
  const obj = {
    duration: "2s",
    timingFunction: "ease-in",
    direction: "reverse"
  };
  return (
    <div>
      <Bounce allProps={obj}>
        <h1>Hello World</h1>
      </Bounce>
    </div>
  );
```

- [ ] Multistep animations and transitions (currently it works if you nest two or more animation components but I don't think it's the best way to do this).
- [ ] Refactor the code.
- [ ] Tests.
- [ ] Type checking (optional).
- [ ] Making animations more flexible.
