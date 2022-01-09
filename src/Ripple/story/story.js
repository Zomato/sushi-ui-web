import React from 'react';
import styled from 'styled-components';
import { getRippleStyles, ripples } from '../index';
import Button from '../../Button/Button';
import red from '../../tokens/color/red';
import black from '../../tokens/color/black';
import white from '../../tokens/color/white';

function RippleStory() {
  // Ripple should only be on a focusable element like <a> or <button>
  const Anchor = styled.a`
    display: inline-block;
    padding: 1rem;
    text-decoration: none;
    color: ${black};
    border: 0.1rem solid ${black};
    margin-right: 1rem;
    margin-top: 1rem;
  `;
  const DarkRipple = styled(Anchor)`
    ${ripples.dark}
  `;
  const LightRipple = styled(Anchor)`
    background-color: ${black};
    color: ${white};
    ${ripples.light}
  `;
  const CustomRipple = styled(Anchor)`
    ${getRippleStyles(red.z500)}
  `;
  const SushiButton = styled(Button)`
    margin-right: 1rem;
    margin-top: 1rem;
  `;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <DarkRipple href='#' onClick={(e) => e.preventDefault()}>
        DarkRipple
      </DarkRipple>
      <LightRipple href='#' onClick={(e) => e.preventDefault()}>
        LightRipple
      </LightRipple>
      <CustomRipple href='#' onClick={(e) => e.preventDefault()}>
        CustomRipple
      </CustomRipple>
      {/* Sushi Buttons already have the ripple effect */}
      <SushiButton>Sushi Button Solid</SushiButton>
      <SushiButton appearance='outline'>Sushi Button Outline</SushiButton>
    </div>
  );
}

export { RippleStory };
