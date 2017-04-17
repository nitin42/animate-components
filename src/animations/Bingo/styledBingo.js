import { keyframes } from 'styled-components';

const puffmeout = keyframes`
	0% {
		opacity: 1;
		transform-origin: 50% 50%;
		transform: scale(1, 1);
		filter: blur(0px);
	}

	100% {
		opacity: 0;
		transform-origin: 50% 50%;
		transform: scale(2, 2);
		filter: blur(3px);
	}
`;

const puffmein = keyframes`
	0% {
		opacity: 0;
		transform-origin: 50% 50%;
		transform: scale(2, 2);
		filter: blur(3px);
	}

	100% {
		opacity: 1;
		transform-origin: 50% 50%;
		transform: scale(1, 1);
		filter: blur(0px);
	}
`;

const vanishout = keyframes`
	0% {
		opacity: 1;
		transform-origin: 50% 50%;
		transform: scale(1, 1);
		filter: blur(0px);
	}

	100% {
		opacity: 0;
		transform-origin: 50% 50%;
		transform: scale(2, 2);
		filter: blur(18px);
	}
`;

const vanishin = keyframes`
	0% {
		opacity: 0;
		transform-origin: 50% 50%;
		transform: scale(2, 2);
		filter: blur(18px);
	}

	100% {
		opacity: 1;
		transform-origin: 50% 50%;
		transform: scale(1, 1);
		filter: blur(0px);
	}
`;

export {
	puffmeout,
	puffmein,
	vanishin,
	vanishout
}