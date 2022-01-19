import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const ChevronLeft = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>chevron-left</title>
      <path d='M13.040 4.88c0.28 0.3 0.28 0.78 0 1.060l-4.48 4.48 4.48 4.46c0.28 0.3 0.28 0.78 0 1.060s-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0z'></path>
    </Icon>
  );
};

export default ChevronLeft;
