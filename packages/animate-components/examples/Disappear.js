import { Disappear } from 'animate-components';
import { fadeIn } from 'animate-keyframes';

export default class App extends Component {
  render () {
    return (
      <Disappear name={fadeIn} as="div" duration="4s">
        <h1>I will disappear after 2s!</h1>
      </Disappear>
    );
  }
}
