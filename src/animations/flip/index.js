// @flow

import Flippy from './styledFlip';
import HOC from '../../containers/HOC';
import type { Components } from '../../../types';

const flipObj: Components = {
  Flip: HOC('Flip', Flippy.flip),
  FlipX: HOC('FlipX', Flippy.flipX),
  FlipY: HOC('FlipY', Flippy.flipY),
};

export default flipObj;
