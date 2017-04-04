// @flow

import { slideUp, slideDown, slideLeft, slideRight } from './styledSlide';

import HOC from '../HOC';

import type { Components } from '../../../types';

const slideObj: Components = {
  SlideUp: HOC('SlideUp', slideUp),
  SlideDown: HOC('SlideDown', slideDown),
  SlideRight: HOC('SlideRight', slideRight),
  SlideLeft: HOC('SlideLeft', slideLeft),
};

export default slideObj;
