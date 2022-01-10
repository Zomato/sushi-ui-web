import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { animations } from '../index';

const AnimateOnChange = (props) => {
  const {
    animation: animationBaseName,
    animationIn = `${animationBaseName}In`,
    animationOut = `${animationBaseName}Out`,
    children,
    durationOut,
    style,
  } = props;
  const [animation, setAnimation] = useState('');
  const [displayChildren, setDisplayChildren] = useState(children);
  const firstUpdate = useRef(true);

  useEffect(() => {
    // Don't run the effect the first time through
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setAnimation('out');
  }, [children]);

  const baseClassName = 'animate-on-change';

  const showDisplayContent = (e) => {
    if (animation === 'out') {
      setAnimation('in');
      setDisplayChildren(children);
    }
  };

  return (
    <AnimateOnChange.Container
      onTransitionEnd={showDisplayContent}
      onAnimationEnd={showDisplayContent}
      className={`${baseClassName} ${baseClassName}-${animation}`}
      animation={animation}
      animationIn={animationIn}
      animationOut={animationOut}
      durationOut={durationOut}
      style={style}
    >
      {displayChildren}
    </AnimateOnChange.Container>
  );
};

AnimateOnChange.Container = styled.span`
  display: inline-block;
  will-change: opacity;
  transition: opacity ${(props) => props.durationOut}ms ease-out;
  opacity: ${(props) => (props.animation === 'out' ? 0 : 1)};
  animation: ${(props) =>
    props.animation === 'out'
      ? animations[props.animationOut] || props.animationOut
      : animations[props.animationIn] || props.animationIn};
`;

AnimateOnChange.propTypes = {
  children: PropTypes.any.isRequired,
  /** Time in ms for the out animation (defaults to 200ms) */
  durationOut: PropTypes.number,
  /** Specify the animation base name; use in place of animationIn and animationOut. */
  animation: PropTypes.oneOf(['fade', 'pop', 'slide', 'bounce']),
  /** A named animation as defined in animations */
  animationIn: PropTypes.string,
  /** A named animation as defined in animations */
  animationOut: PropTypes.string,
  /** custom wrapper styles */
  style: PropTypes.object,
};

AnimateOnChange.defaultProps = {
  animation: 'fade',
  durationOut: 200,
};

AnimateOnChange.displayName = 'AnimateOnChange';

export default AnimateOnChange;
