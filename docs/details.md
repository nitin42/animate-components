# Behind the scenes

Animate Components encapsulates the whole logic for animating an element or a component in React inside the **High Order Component**.

### High Order Component takes care of
* Renders the children using either `renderRootWithInline` method or `renderRootWithBlock` method based on the prop.                                           
* `renderRootWithInline` wraps the children inside a `span` (**inline display**) whereas `renderRootWithBlock` wraps inside the `div` (**block display**).

* Calculates the animation state based on the [props](https://github.com/nitin42/animate-components/blob/master/docs/api.md) and animation name. This logic resides in the `store` method.

```javascript
store = (props: Props) => {
  derive(...props);
  setState({...props});
}
```
* **Performance bottleneck** (avoiding re-rendering) by shallow comparing the nextProps and nextState.
* Props validation.
### Animations
Keyframe rules for all the components are defined using [styled-components](https://github.com/styled-components/styled-components). 

```javascript
const FadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -ms-transform: none;
    transform: none;
  }
`;
```

### Component Creation
An animation component is created by passing the name of the animation component and the keyframe rules defined for that component.

```javascript
const FadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -ms-transform: none;
    transform: none;
  }
`;

export default HOC('FadeLeft', FadeLeft);
```
