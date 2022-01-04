import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Plus = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>plus</title>
      <path d='M15.5 9.42h-4.5v-4.5c0-0.56-0.44-1-1-1s-1 0.44-1 1v4.5h-4.5c-0.56 0-1 0.44-1 1s0.44 1 1 1h4.5v4.5c0 0.54 0.44 1 1 1s1-0.46 1-1v-4.5h4.5c0.56 0 1-0.46 1-1s-0.44-1-1-1z'></path>
    </Icon>
  );
};

export default Plus;
