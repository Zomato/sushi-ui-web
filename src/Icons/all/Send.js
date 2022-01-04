import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Send = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>send copy 3</title>
      <g id='send'>
        <polygon points='0 18.57 20 10 0 1.43 0 8.1 13.5 10 0 11.9 0 18.57'></polygon>
      </g>
    </Icon>
  );
};

export default Send;
