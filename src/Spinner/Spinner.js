import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const loadingKeyframe = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

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

export { spinnerTypes };

const Spinner = (props) => {
  const variant = spinnerTypes[props.size];
  return (
    <Spinner.container variant={variant}>
      <Spinner.dot {...props} variant={variant} className='bounce1' />
      <Spinner.dot {...props} className='bounce2' variant={variant} />
      <Spinner.dot {...props} className='bounce3' variant={variant} />
    </Spinner.container>
  );
};

Spinner.container = styled.div`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  width: ${(props) => 4 * props.variant.width}rem; // TODO
  text-align: center;
`;

Spinner.dot = styled.div`
  width: ${(props) => props.variant.width}rem; // TODO
  height: ${(props) => props.variant.width}rem; // TODO
  background-color: ${(props) => props.color}; // TODO
  border-radius: 100%;
  margin-right: 0.2rem;
  display: inline-block;
  -webkit-animation: ${loadingKeyframe} 1.4s infinite ease-in-out both;
  animation: ${loadingKeyframe} 1.4s infinite ease-in-out both;
  &.bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &.bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  &.bounce3 {
  }
`;
Spinner.propTypes = {
  inverse: PropTypes.bool,
  /** Color could be a hex code or a string*/
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Spinner.defaultProps = {
  inverse: false,
  size: 'small',
  color: 'rgba(0,0,0)',
};

export default Spinner;
