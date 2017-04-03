import { keyframes } from 'styled-components';

const rotateIn = keyframes`
	from {
		transform-origin: center;
		transform: rotate3d(0, 0, 1, -200deg);
		opacity: 0; 
	}

	to {
		transform: none;
		opacity: 1;
	}
`;

const rotateLeft = keyframes`
	from {
		transform-origin: left bottom;
		transform: rotate3d(0, 0, 1, -45deg);
		opacity: 0;
	}

	to {
		transform-origin: left bottom;
		transform: none;
		opacity: 1;
	}
`;

const rotateRight = keyframes`
	from {
		transform-origin: right bottom;
		transform: rotate3d(0, 0, 1, 45deg);
		opacity: 0;
	}

	to {
		transform-origin: right bottom;
		transform: none;
		opacity: 1;
	}
`;

const rotateUpLeft = keyframes`
	from {
		transform-origin: left bottom;
		transform: rotate3d(0, 0, 1, 45deg);
		opacity: 0;
	}

	to {
		transform-origin: left bottom;
		transform: none;
		opacity: 1;
	}
`;

const rotateUpRight = keyframes`
	from {
		transform-origin: right bottom;
		transform: rotate3d(0, 0, 1, -45deg);
		opacity: 0;
	}

	to {
		transform-origin: right bottom;
		transform: none;
		opacity: 1;
	}
`;

export { rotateIn, rotateLeft, rotateRight, rotateUpLeft, rotateUpRight };
