import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const UpTriangle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>up-triangle</title>
      <path d='M0 15.42l10-10 10 10h-20z'></path>
    </Icon>
  );
};

export default UpTriangle;
