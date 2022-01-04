import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const LeftTriangle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>left-triangle</title>
      <path d='M15 20.42l-10-10 10-10v20z'></path>
    </Icon>
  );
};

export default LeftTriangle;
