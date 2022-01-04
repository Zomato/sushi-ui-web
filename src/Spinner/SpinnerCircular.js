import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import grey from '../tokens/color/grey';
import { hexToRgb } from '../helpers/commonHelper';

const spinnerTypes = {
  small: {
    width: 1,
  },
  medium: {
    width: 1.8,
  },
  large: {
    width: 2.4,
  },
};

const SpinnerCircular = ({
  size = 'small',
  isSlim = false,
  color,
  ...props
}) => {
  const variant = spinnerTypes[size];
  return (
    <SpinnerCircular.container
      width={variant.width}
      color={color}
      isSlim={isSlim}
      {...props}
    />
  );
};

SpinnerCircular.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isSlim: PropTypes.bool,
  color: PropTypes.string,
};

const circularSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const circularSpinnerBG = (props) => {
  const color = props.color || grey.z500;
  const rgb = hexToRgb(color);
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`;
};

const borderWidth = (props) => {
  return `${
    props.isSlim ? (0.5 / 3) * props.width : (0.5 / 2) * props.width
  }rem`;
};

SpinnerCircular.container = styled.div`
  width: ${(props) => 1.4 * props.width}rem;
  height: ${(props) => 1.4 * props.width}rem;
  border-radius: 50%;
  border: ${borderWidth} solid ${circularSpinnerBG};
  border-top: ${borderWidth} solid ${(props) => props.color};
  animation: ${circularSpin} 1s infinite linear;
`;

export default SpinnerCircular;
