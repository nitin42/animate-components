import Inferno from 'inferno';
import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import { fadeIn } from 'animate-keyframes';
import { getElementType, avoidNest } from '../utils/index';

export default class Disappear extends Component {
  static defaultProps = {
    name: fadeIn,
    duration: '2s',
    as: 'div',
    timingFunction: 'ease'
  };

  componentWillMount = () => {
    this.timeouts = null;
  };

  componentDidMount = () => {
    this.performAndDisapper(this.props);
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeouts)
  };

  performAndDisapper = (props) => {
    const element = document.getElementById('animation-root');
    element.style = `animation: ${props.name} ${props.duration} ${props.timingFunction}`; // start on initial render
    element.addEventListener('animationend', () => {
      element.style =
        'visibility: \'hidden\'; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;';
      this.timeouts = setTimeout(() => {
        element.remove(); // Gives a warning for InfernoJS (works well for ReactJS)
      }, 2000); // Sync with fadeOut
    });
  };

  render() {
    const { name, duration, children, as, timingFunction, component, ...rest } = this.props;
    const ElementType = getElementType(Disappear, this.props);
    const NormalizedComponent = avoidNest(ElementType, this.props, 'Disappear');
    const Wrapper = this.props.component;

    return (
      <NormalizedComponent id='animation-root' {...rest}>
        { Wrapper ? createElement(Wrapper, children) : children }
      </NormalizedComponent>
    );
  }
}
