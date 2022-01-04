import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const DownTriangleSmall = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>down-triangle-small</title>
      <path d='M16.66 6.66l-6.66 6.68-6.66-6.68z'></path>
    </Icon>
  );
};

export default DownTriangleSmall;
