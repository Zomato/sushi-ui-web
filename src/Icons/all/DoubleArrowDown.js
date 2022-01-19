import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const DoubleArrowDown = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>Artboard 809</title>
      <path d='M9.1,9.62a1.26,1.26,0,0,0,1.76,0l7.27-7.23A1.25,1.25,0,0,0,16.37.61L10,7,3.63.62A1.25,1.25,0,0,0,1.86,2.38Z'></path>
      <path d='M16.37,10.37,10,16.72,3.63,10.37a1.24,1.24,0,1,0-1.76,1.76l7.25,7.24a1.26,1.26,0,0,0,1.76,0l7.25-7.24a1.24,1.24,0,0,0-1.76-1.76Z'></path>
    </Icon>
  );
};

export default DoubleArrowDown;
