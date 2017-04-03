import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
  	opacity: 0;
  }

  100% {
  	opacity: 1;
  }
`;

const left = keyframes`
  from {
  	opacity: 0;
  	-webkit-transform: translate3d(-100%, 0, 0);
  }

  to {
  	opacity: 1;
  	-webkit-transform: none;
  }
`;

const leftBig = keyframes`
	from {
		opacity: 0;
	 	-webkit-transform: translate3d(-2000px, 0, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: none;
	}
	
`;

const right = keyframes`
	from {
		opacity: 0;
	 	-webkit-transform: translate3d(100%, 0, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: none;
	}

`;

const rightBig = keyframes`
	from {
		opacity: 0;
	 	-webkit-transform: translate3d(2000px, 0, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: none;
	}

`;

const down = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: none;
	}	
`;

const downBig = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, -2000px, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: none;
	}
`;

const up = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: none;
	}
`;

const upBig = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 2000px, 0);
	}
	
	to {
		opacity: 1;
		-webkit-transform: none;
	}
`;

export { fadeIn, left, down, downBig, leftBig, right, rightBig, up, upBig };
