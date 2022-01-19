import { css } from 'styled-components';
import fadein from './keyframes/fadein';
import fadeinup from './keyframes/fadeinup';
import fadeout from './keyframes/fadeout';
import popin from './keyframes/popin';
import popout from './keyframes/popout';
import slidein from './keyframes/slidein';
import slideout from './keyframes/slideout';
import shake from './keyframes/shake';
import swing from './keyframes/swing';

// Timing functions a defined on easings.net
export const easings = {
  linear: 'linear',
  easeInSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
  easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
  easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
  easeInOutExpo: 'cubic-bezier(1, 0, 0, 1)',
  easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

export const animations = {
  fadeIn: css`
    ${fadein} 500ms ease-out forwards
  `,
  fadeOut: css`
    ${fadeout} 400ms ease-out forwards
  `,
  fadeinUp: css`
    ${fadeinup} 800ms ${easings.easeOutExpo} forwards
  `,
  popIn: css`
    ${popin} 500ms ${easings.easeOutExpo} forwards
  `,
  popOut: css`
    ${popout} 400ms ${easings.easeOutBack} forwards
  `,
  bounceIn: css`
    ${popin} 300ms ${easings.easeOutBack} forwards
  `,
  bounceOut: css`
    ${popout} 300ms ${easings.easeInBack} forwards
  `,
  slideIn: css`
    ${slidein} 500ms ${easings.easeInOutBack} forwards
  `,
  slideOut: css`
    ${slideout} 350ms ${easings.easeOutBack} forwards
  `,
  shake: css`
    ${shake} 800ms ${easings.easeInOutQuart} forwards
  `,
  swing: css`
    ${swing} 800ms ${easings.easeInOutQuart} forwards
  `,
};
