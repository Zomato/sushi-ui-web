import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Envelope = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>envelope</title>
      <path d='M17.4 16.92h-14.8c-0.6 0-1.1-0.48-1.1-1.060v-9.46l8.080 5.54c0.12 0.080 0.28 0.14 0.42 0.14s0.3-0.060 0.42-0.14l8.080-5.54v9.46c0 0.58-0.5 1.060-1.1 1.060zM2.6 3.92h14.8c0.48 0 0.88 0.3 1.020 0.72l-8.42 5.78-8.42-5.78c0.14-0.42 0.54-0.72 1.020-0.72zM19.98 4.82v0c-0.080-1.34-1.2-2.4-2.58-2.4h-14.8c-1.38 0-2.5 1.060-2.58 2.4v0c0 0.060-0.020 0.1-0.020 0.16v10.88c0 1.4 1.16 2.56 2.6 2.56h14.8c1.44 0 2.6-1.16 2.6-2.56v-10.88c0-0.060-0.020-0.1-0.020-0.16z'></path>
    </Icon>
  );
};

export default Envelope;
