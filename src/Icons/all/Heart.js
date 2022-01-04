import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Heart = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>heart</title>
      <path d='M10 19.46c-0.080 0-0.18-0.020-0.26-0.040h0.020c-0.080 0-7.22-2.86-9.4-9.42-0.36-1.1-0.94-4.76 1.16-7.020 0.8-0.98 2-1.6 3.36-1.62v0c2.12 0.080 3.96 1.16 5.1 2.78l0.020 0.020c1.1-1.68 2.98-2.78 5.12-2.8v0c1.36 0.020 2.56 0.64 3.36 1.6v0.020c2.1 2.26 1.52 5.92 1.16 7.020-2.18 6.54-9.32 9.38-9.4 9.42-0.060 0.020-0.14 0.040-0.24 0.040v0z'></path>
    </Icon>
  );
};

export default Heart;
