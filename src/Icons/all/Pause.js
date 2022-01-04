import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Pause = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <rect x='4' width='2' height='20' rx='1'></rect>
      <rect x='14' width='2' height='20' rx='1'></rect>
    </Icon>
  );
};

export default Pause;
