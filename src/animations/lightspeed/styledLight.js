import { keyframes } from 'styled-components';

const Light = {
  lightIn: keyframes`
    from {
      transform: translate3d(100%, 0, 0) skew(-30deg);
      opacity: 0;
    }
    40% {
      -ms-transform: skew(20deg);
      transform: skew(20deg);
      opacity: 1;
    }
    80% {
      -ms-transform: skew(-5deg);
      transform: skew(-5deg);
      opacity: 1;
    }
    to {
      -ms-transform: none;
      transform: none;
      opacity: 1;
    }
  `,
  lightOut: keyframes`
    from {
      opacity: 1;
    }
    to {
      transform: translate3d(100%, 0, 0) skew(30deg);
      opacity: 0;
    }
  `,
};

export default Light;
