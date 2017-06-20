import { keyframes } from 'styled-components';

// Bingo
const Bingo = {
  puffmeout: keyframes`
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
  `,
  puffmein: keyframes`
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
  `,
  vanishout: keyframes`
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
  `,
  vanishin: keyframes`
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
  `,
};

const Bouncing = {
  bounce: keyframes`
    from {
      animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);
    }
    0% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(.9, .9, .9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }
    80% {
      transform: scale3d(.97, .97, .97);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  `,
  bounceDown: keyframes`
    from {
      animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);
    }
    0% {
      transform: translate3d(0, -2000px, 0);
    }
    60% {
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  `,
  bounceUp: keyframes`
    from {
      animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);
    }
    0% {
      transform: translate3d(0, 2000px, 0);
    }
    60% {
      transform: translate3d(0, -25px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  `,
  bounceLeft: keyframes`
    from, 60% 75% 90%, to {
      animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);
    }
    0% {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: none;
    }
  `,
  bounceRight: keyframes`
    from, 60% 75% 90%, to {
      animation-timing-function: cubic-bezier(0.200, 0.620, 0.340, 1.000);
    }
    0% {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: none;
    }
  `,
};

const Expanse = {
  expanseUp: keyframes`
    0% {
      opacity: 0;
      -ms-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -ms-transform: scale(.2) translate(0%, -200%);
      transform: scale(.2) translate(0%, -200%);
    }
    100% {
      opacity: 1;
      -ms-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -ms-transform: scale(1) translate(0%, 0%);
      transform: scale(1) translate(0%, 0%);
    }
  `,
  expanseDown: keyframes`
    0% {
      opacity: 0;
      -ms-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -ms-transform: scale(.2) translate(0%, 200%);
      transform: scale(.2) translate(0%, 200%);
    }
    100% {
      opacity: 1;
      -ms-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -ms-transform: scale(1) translate(0%, 0%);
      transform: scale(1) translate(0%, 0%);
    }
  `,
  expanseLeft: keyframes`
    0% {
      opacity: 0;
      -ms-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -ms-transform: scale(.2) translate(-200%, 0%);
      transform: scale(.2) translate(-200%, 0%);
    }
    100% {
      opacity: 1;
      -ms-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -ms-transform: scale(1) translate(0%, 0%);
      transform: scale(1) translate(0%, 0%);
    }
  `,
  expanseRight: keyframes`
    0% {
      opacity: 0;
      -ms-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -ms-transform: scale(.2) translate(200%, 0%);
      transform: scale(.2) translate(200%, 0%);
    }
    100% {
      opacity: 1;
      -ms-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -ms-transform: scale(1) translate(0%, 0%);
      transform: scale(1) translate(0%, 0%);
    }
  `,
};

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

const Flippy = {
  flip: keyframes`
    from {
      transform: perspective(450px) rotate3d(0, 1, 0, -360deg);
      animation-timing-function: ease-out;
    }
    40% {
      transform: perspective(450px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
      animation-timing-function: ease-out;
    }
    50% {
      transform: perspective(450px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170px);
      animation-timing-function: ease-in;
    }
    80% {
      transform: perspective(450px) scale3d(.90, .90, .90);
      animation-timing-function: ease-in;
    }
    to {
      transform: perspective(450px);
      animation-timing-function: ease-in;
    }
  `,
  flipX: keyframes`
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  `,
  flipY: keyframes`
    from {
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  `,
};

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

const Rotate = {
  rotateIn: keyframes`
    from {
      -ms-transform-origin: center;
      transform-origin: center;
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }
    to {
      -ms-transform: none;
      transform: none;
      opacity: 1;
    }
  `,
  rotateLeft: keyframes`
    from {
      -ms-transform-origin: left bottom;
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
    to {
      -ms-transform-origin: left bottom;
      transform-origin: left bottom;
      -ms-transform: none;
      transform: none;
      opacity: 1;
    }
  `,
  rotateRight: keyframes`
    from {
      -ms-transform-origin: right bottom;
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
    to {
      -ms-transform-origin: right bottom;
      transform-origin: right bottom;
      -ms-transform: none;
      transform: none;
      opacity: 1;
    }
  `,
  rotateUpRight: keyframes`
    from {
      -ms-transform-origin: right bottom;
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
    to {
      -ms-transform-origin: right bottom;
      transform-origin: right bottom;
      -ms-transform: none;
      transform: none;
      opacity: 1;
    }
  `,
  rotateUpLeft: keyframes`
    from {
      -ms-transform-origin: left bottom;
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
    to {
      -ms-transform-origin: left bottom;
      transform-origin: left bottom;
      -ms-transform: none;
      transform: none;
      opacity: 1;
    }
  `,
};

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

const Special = {
  flash: keyframes`
    from {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  rollIn: keyframes`
    from {
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
      opacity: 0;
    }
    to {
      -ms-transform: none;
      transform: none;
      opacity: 1;
    }
  `,
  rollOut: keyframes`
    from {
      opacity: 1;
    }
    to {
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
      opacity: 0;
    }
  `,
  rubber: keyframes`
    from {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, .95, 1);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  `,
  swing: keyframes`
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }
    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  `,
  zoom: keyframes`
    from {
      opacity: 0;
      transform: scale3d(.4, .4, .4);
    }
    to {
      opacity: 1;
    }
  `,
  hinge: keyframes`
    from {
      -ms-transform-origin: top-left;
      transform-origin: top-left;
      animation-timing-function: ease-in-out;
      opacity: 1;
    }
    20%, 40% {
      -ms-transform-origin: top-left;
      transform-origin: top-left;
      -ms-transform: rotate(0, 0, 1, 80deg);
      transform: rotate(0, 0, 1, 80deg);
      animation-timing-function: ease-in-out;
      opacity: 1;
    }
    60%, 80% {
      -ms-transform-origin: top-left;
      transform-origin: top-left;
      -ms-transform: rotate(0, 0, 1, 20deg);
      transform: rotate(0, 0, 1, 20deg);
      animation-timing-function: ease-in-out;
      opacity: 1;
    }
    to {
      transform: translate3d(0, 700px, 0);
      opacity: 0;
    }
  `,
  pulse: keyframes`
    from {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(1.4, 1.4, 1.4);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  `,
  expandUp: keyframes`
    0% {
      transform: translateY(100%) scale(0.6) scaleY(0.5);
    }
    60%{
      transform: translateY(-7%) scaleY(1.12);
    }
    75%{
      transform: translateY(3%);
    }
    100% {
      transform: translateY(0%) scale(1) scaleY(1);
    }
  `,
  entrance: keyframes`
    0% {
      transform: scale(0.3) rotate(6deg) translateX(-30%) translateY(30%);
      opacity: 0.1;
    }
    30% {
      transform: scale(1.03) rotate(-2deg) translateX(2%) translateY(-2%);
      opacity: 1;
    }
    45% {
      transform: scale(0.98);
      opacity: 1;
    }
    60% {
      transform: scale(1.01);
      opacity: 1;
    }
    75% {
      transform: scale(0.99);
      opacity: 1;
    }
    90% {
      transform: scale(1.01);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  `,
  hatch: keyframes`
    0% {
      transform: scaleY(0.6);
    }
    20% {
      transform: rotate(-2deg) scaleY(1.05);
    }
    35% {
      transform: rotate(2deg) scaleY(1);
    }
    50% {
      transform: rotate(-2deg);
    }
    65% {
      transform: rotate(1deg);
    }
    80% {
      transform: rotate(-1deg);
    }
    100% {
      transform: none;
    }
  `,
  starWars: keyframes`
    0% {
      opacity: 0;
      transform: scale(1.5) translateY(-0.75em);
    }
    20% {
      opacity: 1;
    }
    90% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: translateZ(-1000em);
    }
  `,
};

export {
  Bouncing,
  Fade,
  Flippy,
  Light,
  Rotate,
  Special,
  Slide,
  Perspective,
  Bingo,
  Expanse,
}
