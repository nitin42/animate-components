import { keyframes } from 'styled-components';

const puffmeout = keyframes`
  0% {
    opacity: 1;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
  }

  100% {
    opacity: 0;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -ms-transform: scale(2, 2);
    transform: scale(2, 2);
    -webkit-filter: blur(3px);
    filter: blur(3px);
  }
`;

const puffmein = keyframes`
  0% {
    opacity: 0;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -ms-transform: scale(2, 2);
    transform: scale(2, 2);
    -webkit-filter: blur(3px);
    filter: blur(3px);
  }

  100% {
    opacity: 1;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
  }
`;

const vanishout = keyframes`
  0% {
    opacity: 1;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
  }

  100% {
    opacity: 0;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -ms-transform: scale(2, 2);
    transform: scale(2, 2);
    -webkit-filter: blur(18px);
    filter: blur(18px);
  }
`;

const vanishin = keyframes`
  0% {
    opacity: 0;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -ms-transform: scale(2, 2);
    transform: scale(2, 2);
    -webkit-filter: blur(18px);
    filter: blur(18px);
  }

  100% {
    opacity: 1;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
  }
`;

export {
  puffmeout,
  puffmein,
  vanishin,
  vanishout
}
