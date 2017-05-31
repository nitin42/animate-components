// @flow

import Fade from './styledFade';
import HOC from '../../containers/HOC';
import type { Components } from '../../../types';

const fadeObj: Components = {
  FadeIn: HOC('FadeIn', Fade.fadeIn),
  FadeInDown: HOC('FadeInDown', Fade.down),
  FadeInDownBig: HOC('FadeInDownBig', Fade.downBig),
  FadeInUp: HOC('FadeInUp', Fade.up),
  FadeInUpBig: HOC('FadeInUpBig', Fade.upBig),
  FadeInLeft: HOC('FadeInLeft', Fade.left),
  FadeInLeftBig: HOC('FadeInLeftBig', Fade.leftBig),
  FadeInRight: HOC('FadeInRight', Fade.right),
  FadeInRightBig: HOC('FadeInRightBig', Fade.rightBig),
};

export default fadeObj;
