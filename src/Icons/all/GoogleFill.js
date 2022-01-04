import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const GoogleFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>google-fill</title>
      <path d='M16.28 18c-1.62 1.52-3.84 2.42-6.48 2.42-3.84 0-7.14-2.24-8.74-5.52l3.16-2.5c0.78 2.4 2.98 4.14 5.58 4.14 1.46 0 2.56-0.4 3.4-1 1.3-0.92 1.88-2.32 2-3.24h-5.4v-3.7h9.2c0.14 0.62 0.2 1.22 0.2 2.040 0 3.040-1.060 5.6-2.92 7.36zM4.22 8.44c-0.2 0.62-0.32 1.28-0.32 1.98s0.12 1.36 0.32 1.98l-3.18 2.5c-0.66-1.36-1.040-2.88-1.040-4.48s0.38-3.14 1.040-4.5c1.62-3.26 4.92-5.5 8.76-5.5 2.64 0 4.86 0.98 6.54 2.6l-2.76 2.76c-0.7-0.68-1.94-1.5-3.78-1.5-2.6 0-4.8 1.74-5.58 4.16z'></path>
    </Icon>
  );
};

export default GoogleFill;
