import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const DoubleArrowUp = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>Artboard 809</title>
      <path
        d='M10.9,10.4c-0.5-0.5-1.3-0.5-1.8,0l-7.3,7.2c-0.5,0.5-0.5,1.3,0,1.8c0.5,0.5,1.3,0.5,1.8,0c0,0,0,0,0,0L10,13l6.4,6.4
	c0.5,0.5,1.3,0.4,1.8-0.1c0.4-0.5,0.4-1.2,0-1.7L10.9,10.4z'
      ></path>
      <path
        d='M3.6,9.6L10,3.3l6.4,6.3c0.5,0.5,1.3,0.5,1.8,0c0.5-0.5,0.5-1.3,0-1.8l-7.3-7.2c-0.5-0.5-1.3-0.5-1.8,0L1.9,7.8
	c-0.5,0.5-0.5,1.3,0,1.8S3.2,10.1,3.6,9.6z'
      ></path>
    </Icon>
  );
};

export default DoubleArrowUp;
