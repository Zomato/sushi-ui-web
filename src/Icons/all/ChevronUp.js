import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const ChevronUp = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>chevron-up</title>
      <path d='M15.54 13.44c-0.3 0.3-0.78 0.3-1.060 0l-4.48-4.46-4.46 4.46c-0.3 0.3-0.78 0.3-1.060 0s-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060z'></path>
    </Icon>
  );
};

export default ChevronUp;
