# Example

```javascript
import React, { Component } from 'react';
import { Bounce } from 'animate-components';

export default class App extends Component {
  render () {
    return (
      <div>
        <Bounce>
          <h1>Hello, My name is Billy</h1>
        </Bounce>
      </div>
    );
  }
}
```

The animation component can takes these props:
* **duration**
```javascript
<Bounce duration="2s">
```
* **delay**
```javascript
<Bounce delay="2s">
```
* **timingFunction**
```javascript
<Bounce timingFunction="ease-in">
```
* **direction**
```javascript
<Bounce direction="reverse">
```
* **iterations**
```javascript
<Bounce iterations="2">
```
* **backfaceVisible**
```javascript
<Bounce backfaceVisible="visible">
```

All the animation components are wrapped in a high order component which renders a `<span>` with the styles derived from the **props**.
