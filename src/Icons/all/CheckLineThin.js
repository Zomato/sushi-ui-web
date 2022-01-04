import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const CheckLineThin = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>check-line-thin</title>
      <path d='M10 1.040c5.18 0 9.38 4.2 9.38 9.38s-4.2 9.38-9.38 9.38c-5.18 0-9.38-4.2-9.38-9.38v0c0-5.18 4.2-9.38 9.38-9.38v0zM10 0.42c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.52 0 10-4.48 10-10v0c0-5.52-4.48-10-10-10v0zM14 6.72l-5.62 5.4-2.36-2.32c-0.18-0.3-0.48-0.48-0.82-0.48-0.52 0-0.94 0.42-0.94 0.94 0 0.32 0.16 0.62 0.42 0.78v0l3.040 3.020c0.16 0.18 0.4 0.28 0.66 0.28v0c0.24 0 0.48-0.1 0.64-0.26v0l6.26-6.060c0.26-0.16 0.44-0.46 0.44-0.78 0-0.52-0.42-0.94-0.94-0.94-0.3 0-0.58 0.14-0.76 0.38v0z'></path>
    </Icon>
  );
};

export default CheckLineThin;
