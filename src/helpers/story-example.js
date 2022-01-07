/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { base as baseColors, text as textColor } from '../tokens/colors';

const Title = styled.div`
  position: absolute;
  font-size: 1.2rem;
  color: rgb(168, 168, 168);
  top: 1.5em;
  left: 2rem;
  line-height: 1.6;
`;

const Wrapper = styled.div`
  padding: 4.5rem 3rem 3rem 3rem;
  position: relative;
  border: 0.1rem solid rgb(236, 236, 236);
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  line-height: inherit;
  &.align-center {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  background: ${(props) =>
    props.background === 'dark' ? baseColors.default : baseColors.white};
  color: ${(props) =>
    props.background === 'dark' ? baseColors.white : textColor.default};
`;

const Example = (props) => (
  <Wrapper
    className={props.align === 'center' ? 'align-center' : null}
    {...props}
  >
    <Title>{props.title}</Title>
    {props.children}
  </Wrapper>
);

export default Example;
