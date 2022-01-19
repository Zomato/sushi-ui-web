import { getRippleStyles } from './getRippleStyles';

import grey from '../tokens/color/grey';
import white from '../tokens/color/white';

export const ripples = {
  dark: getRippleStyles(grey.z300),
  light: getRippleStyles(white),
};
