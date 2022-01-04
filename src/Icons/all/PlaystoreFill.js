import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const PlaystoreFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>playstore-fill</title>
      <path d='M4.080 0.74l10.58 5.82-2.98 2.92-9.14-9.020c0.52-0.12 1.080-0.020 1.54 0.28zM1.4 1.2l9.34 9.22-9.34 9.22c-0.26-0.34-0.4-0.76-0.4-1.18v-16.080c0-0.44 0.14-0.84 0.4-1.18zM18.52 8.7c0.64 0.36 1.020 1 1.020 1.72s-0.38 1.36-1.020 1.72l-2.66 1.46-3.24-3.18 3.24-3.18 2.66 1.46zM11.68 11.34l2.98 2.92-10.58 5.84c-0.34 0.22-0.7 0.32-1.080 0.32-0.16 0-0.32-0.020-0.46-0.060l9.14-9.020z'></path>
    </Icon>
  );
};

export default PlaystoreFill;
