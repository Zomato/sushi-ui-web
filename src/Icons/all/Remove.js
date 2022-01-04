import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Remove = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>remove</title>
      <path d='M10.96 10.96h4.28c0.53 0 0.96-0.43 0.96-0.96s-0.43-0.96-0.96-0.96v0h-10.48c-0.53 0-0.96 0.43-0.96 0.96s0.43 0.96 0.96 0.96v0h6.2z'></path>
    </Icon>
  );
};

export default Remove;
