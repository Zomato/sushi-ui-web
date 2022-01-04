import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const RightTriangle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>right-triangle</title>
      <path d='M5 0.42l10 10-10 10v-20z'></path>
    </Icon>
  );
};

export default RightTriangle;
