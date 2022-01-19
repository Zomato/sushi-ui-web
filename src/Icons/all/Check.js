import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Check = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>check</title>
      <path d='M8.26 15.16c-0.26 0-0.52-0.1-0.72-0.28l-4-4c-0.38-0.4-0.38-1.040 0-1.42s1.020-0.4 1.42 0l3.3 3.3 6.78-6.8c0.4-0.4 1.020-0.4 1.42 0s0.38 1.020 0 1.42l-7.5 7.5c-0.2 0.18-0.46 0.28-0.7 0.28z'></path>
    </Icon>
  );
};

export default Check;
