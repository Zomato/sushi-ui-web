import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Back = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>back</title>
      <path d='M18.98 9.42h-15.6l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-7 7c-0.1 0.1-0.2 0.2-0.2 0.3-0.1 0.3-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l7 7c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3h15.6c0.6 0 1-0.4 1-1s-0.4-1-1-1z'></path>
    </Icon>
  );
};

export default Back;
