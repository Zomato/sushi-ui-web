import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const PinterestFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>pinterest-fill</title>
      <path d='M11.080 14.92c4.5 0.34 7-4.48 6.38-8.94-0.54-3.96-4.48-5.96-8.68-5.5-3.32 0.38-6.64 3.060-6.78 6.9-0.080 2.34 0.58 4.1 2.82 4.6 0.96-1.7-0.32-2.080-0.52-3.32-0.82-5.060 5.84-8.52 9.34-4.98 2.4 2.44 0.82 9.98-3.080 9.2-3.72-0.76 1.84-6.74-1.14-7.92-2.42-0.96-3.7 2.92-2.56 4.86-0.66 3.3-2.12 6.44-1.52 10.6 1.9-1.38 2.54-4.020 3.060-6.78 0.96 0.58 1.46 1.18 2.68 1.28z'></path>
    </Icon>
  );
};

export default PinterestFill;
