// Source: https://ghinda.net/article/css-ripple-material-design/

import { css, keyframes } from 'styled-components';

import grey from '../tokens/color/grey';

const DEFAULTS = {
  COLOR: grey.z300,
  SIZE: '50rem',
};

const ripple = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  60% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const getRippleStyles = (
  color = DEFAULTS.COLOR,
  size = DEFAULTS.SIZE,
) => css`
  @media (max-width: 480px) {
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: ${size};
      height: ${size};
      background-color: ${color};
      border-radius: 100%;
      opacity: 0.6;
    }
    &:not(:active):after {
      animation: ${ripple} 1s ease-out;
    }
    &:after {
      visibility: hidden;
    }
    &:focus:after {
      visibility: visible;
    }
  }
`;
