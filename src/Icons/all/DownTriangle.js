import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const DownTriangle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>down-triangle</title>
      <path d='M20 5.42l-10 10-10-10h20z'></path>
    </Icon>
  );
};

export default DownTriangle;
