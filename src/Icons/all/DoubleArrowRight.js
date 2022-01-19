import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const DoubleArrowRight = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>double-arrow-right</title>
      <path d='M9.83,4.64a.77.77,0,0,0,0,1.06l4.48,4.46L9.83,14.64a.77.77,0,0,0,0,1.06.75.75,0,0,0,1.06,0l5-5a.74.74,0,0,0,0-1.06l-5-5A.74.74,0,0,0,9.83,4.64Z'></path>
      <path d='M3.58,4.64a.77.77,0,0,0,0,1.06l4.48,4.46L3.58,14.64a.77.77,0,0,0,0,1.06.75.75,0,0,0,1.06,0l5-5a.74.74,0,0,0,0-1.06l-5-5A.74.74,0,0,0,3.58,4.64Z'></path>
    </Icon>
  );
};

export default DoubleArrowRight;
