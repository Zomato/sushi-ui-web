import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const LeftTriangleSmall = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>left-triangle-small</title>
      <path d='M6.66 3.34l6.68 6.66-6.68 6.66z'></path>
    </Icon>
  );
};

export default LeftTriangleSmall;
