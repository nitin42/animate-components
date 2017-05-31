import { keyframes } from 'styled-components';

const Slide = {
  slideDown: keyframes`
    from {
      transform: translate3d(0, -100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  `,

  slideUp: keyframes`
    from {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  `,

  slideLeft: keyframes`
    from {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  `,

  slideRight: keyframes`
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  `,
};

export default Slide;
