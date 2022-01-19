import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const UpTriangleSmall = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>up-triangle-small</title>
      <path d='M16.66 13.34l-6.66-6.68-6.66 6.68z'></path>
    </Icon>
  );
};

export default UpTriangleSmall;
