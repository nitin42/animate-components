# API Reference

Props

**duration**

Type: `string`

Default: `1s`

**timingFunction**

Type: `string`

Default: `ease`

**delay**

Type: `string`

Default: `0s`

**direction**

Type: `string`

Default: `normal`

**iterations**

Type: `string`

Default: `1`

**backfaceVisible**

Type: `string`

Default: `visible`

**fillMode**

Type: `string`

Default: `none`

**playState**

Type: `string`

Default: `running`

**block**

Renders the animation component with `div` wrapper with `display: block`.

Example

```javascript
import React from 'react';

import { Entrance } from 'animate-components';

class App extends React.Component {
  render () {
    return (
      <Entrance block>
        <h1>Hello World!</h1>
      </Entrance>
    );
  }
}
```
