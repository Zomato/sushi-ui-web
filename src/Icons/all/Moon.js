import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Moon = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>moon</title>
      <path d='M6.5 0.42h-0.1c-4.1 1.7-6.9 6-6.3 10.9 0.6 4.7 4.4 8.5 9 9 0.4 0.1 0.9 0.1 1.3 0.1 4.3 0 8-2.6 9.6-6.4 0.1-0.2-0.1-0.5-0.3-0.5h-0.1c-1.1 0.4-2.2 0.6-3.4 0.6-0.6 0-1.3-0.1-1.9-0.2-3.9-0.8-7-3.9-7.8-7.8-0.5-1.8-0.3-3.6 0.4-5.2 0-0.3-0.1-0.5-0.4-0.5z'></path>
    </Icon>
  );
};

export default Moon;
