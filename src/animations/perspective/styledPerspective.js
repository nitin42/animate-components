import { keyframes } from 'styled-components';

const down = keyframes`
  0% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(0deg);
  }

  100% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(-180deg);
  }
`;

const up = keyframes`
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg);
  }

  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(180deg);
  }
`

const right = keyframes`
	0% {
		transform-origin: 100% 0;
		transform: perspective(800px) rotateY(0deg);
	}

	100% {
		transform-origin: 100% 0;
		transform: perspective(800px) rotateY(180deg);
	}
`

const left = keyframes`
	0% {
		transform-origin: 0 0;
		transform: perspective(800px) rotateY(0deg);
	}

	100% {
		transform-origin: 0 0;
		transform: perspective(800px) rotateY(-180deg);
	}
`

export {
	down,
	up,
	right,
	left
}