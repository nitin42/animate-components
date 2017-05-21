import { keyframes } from 'styled-components';

const perspectiveDown = keyframes`
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
`;

const perspectiveUp = keyframes`
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
`;

const perspectiveRight = keyframes`
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
`;

const perspectiveLeft = keyframes`
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
`;

export {
  perspectiveDown,
  perspectiveUp,
  perspectiveRight,
  perspectiveLeft,
};
