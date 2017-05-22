import { keyframes } from 'styled-components';

const Fade = {
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  `,

  left: keyframes`
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      -ms-transform: none;
      transform: none;
    }
  `,

  leftBig: keyframes`
    from {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }

    to {
      opacity: 1;
      -ms-transform: none;
      transform: none;
    }
  `,

  right: keyframes`
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      -ms-transform: none;
      transform: none;
    }
  `,

  rightBig: keyframes`
    from {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }

    to {
      opacity: 1;
      -ms-transform: none;
      transform: none;
    }
  `,

  down: keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      -ms-transform: none;
      transform: none;
    }
  `,

  downBig: keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }

    to {
      opacity: 1;
      -ms-transform: none;
      transform: none;
    }
  `,

  up: keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -ms-transform: none;
      transform: none;
    }
  `,

  upBig: keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }

    to {
      opacity: 1;
      -ms-transform: none;
      transform: none;
    }
  `,
};

export default Fade;
