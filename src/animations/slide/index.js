// @flow

import Slide from './styledSlide';

import HOC from '../../containers/HOC';

import type { Components } from '../../../types';

const slideObj: Components = {
  SlideUp: HOC('SlideUp', Slide.slideUp),
  SlideDown: HOC('SlideDown', Slide.slideDown),
  SlideRight: HOC('SlideRight', Slide.slideRight),
  SlideLeft: HOC('SlideLeft', Slide.slideLeft),
};

export default slideObj;
