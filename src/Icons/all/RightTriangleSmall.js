import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const RightTriangleSmall = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>right-triangle-small</title>
      <path d='M13.34 3.34l-6.68 6.66 6.68 6.66z'></path>
    </Icon>
  );
};

export default RightTriangleSmall;
