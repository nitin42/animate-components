import { keyframes } from 'styled-components';

const Perspective = {
  perspectiveDown: keyframes`
    0% {
      -ms-transform-origin: 0 100%;
      transform-origin: 0 100%;
      transform: perspective(800px) rotateX(0deg);
    }
    100% {
      -ms-transform-origin: 0 100%;
      transform-origin: 0 100%;
      transform: perspective(800px) rotateX(-180deg);
    }
  `,
  perspectiveUp: keyframes`
    0% {
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
      transform: perspective(800px) rotateX(0deg);
    }
    100% {
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
      transform: perspective(800px) rotateX(180deg);
    }
  `,
  perspectiveRight: keyframes`
    0% {
      -ms-transform-origin: 100% 0;
      transform-origin: 100% 0;
      transform: perspective(800px) rotateY(0deg);
    }
    100% {
      -ms-transform-origin: 100% 0;
      transform-origin: 100% 0;
      transform: perspective(800px) rotateY(180deg);
    }
  `,
  perspectiveLeft: keyframes`
    0% {
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
      transform: perspective(800px) rotateY(0deg);
    }
    100% {
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
      transform: perspective(800px) rotateY(-180deg);
    }
  `,
};

export default Perspective;
