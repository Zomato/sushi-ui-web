import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Location = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>location</title>
      <path d='M2 8.72c0-4.6 3.7-8.3 8.2-8.3 4.6 0 8.3 3.7 8.2 8.3 0 6.3-7.5 11.4-7.8 11.6-0.1 0.1-0.3 0.1-0.4 0.1s-0.2 0-0.4-0.1c-0.020-0.040-0.12-0.1-0.28-0.22-1.38-1.080-7.52-5.78-7.52-11.38zM3.4 8.72c0 4.6 5.3 8.9 6.8 10 1.6-1.1 6.8-5.3 6.8-10 0-3.7-3-6.8-6.8-6.8s-6.8 3-6.8 6.8zM7 8.42c0-1.8 1.5-3.2 3.2-3.2 1.8 0 3.2 1.5 3.2 3.2s-1.5 3.2-3.2 3.2c-1.7 0-3.2-1.4-3.2-3.2zM8.5 8.42c0 1 0.8 1.8 1.7 1.8 1 0 1.8-0.8 1.8-1.8s-0.7-1.8-1.7-1.8c-1 0-1.8 0.8-1.8 1.8z'></path>
    </Icon>
  );
};

export default Location;
