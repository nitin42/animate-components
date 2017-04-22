import { keyframes } from 'styled-components';

const rotateIn = keyframes`
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
`;

const rotateLeft = keyframes`
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
`;

const rotateRight = keyframes`
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
`;

const rotateUpLeft = keyframes`
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
`;

const rotateUpRight = keyframes`
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
`;

export { rotateIn, rotateLeft, rotateRight, rotateUpLeft, rotateUpRight };
