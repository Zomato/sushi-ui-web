import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import red from '../tokens/color/red';

const AnimateProgress = keyframes`
    0% {
        width: 0
    }
    to {
        width: 90%
    }
`;

const Bar = styled.div`
  background: ${(props) => props.color};
  top: 0;
  pointer-events: none;
  user-select: none;
  height: 2px;
  z-index: 20000000;
  position: fixed;
  left: 0;
  width: 0;
  opacity: 1;
  contain: content;
  ${(props) =>
    props.active &&
    css`
      transform: scaleX(1);
      transform-origin: left;
      animation: ${AnimateProgress} 2s cubic-bezier(0.65, 0.05, 0.36, 1)
        forwards;
      will-change: transform;
    `}
`;

const ProgressBar = (props) => {
  return <Bar {...props} />;
};

ProgressBar.propTypes = {
  /** Default color is z_red, you can override in in this prop */
  color: PropTypes.string,
  /** If active, progress bar will start animating (on top of page and will stop at 90%) */
  active: PropTypes.bool,
};

ProgressBar.defaultProps = {
  color: red.z_red,
  active: false,
};

export default ProgressBar;
