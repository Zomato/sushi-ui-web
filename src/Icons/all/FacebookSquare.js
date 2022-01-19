import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const FacebookSquare = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>facebook-square</title>
      <path d='M10.68 20.42h-9.58c-0.6 0-1.1-0.5-1.1-1.1v-17.8c0-0.62 0.5-1.1 1.1-1.1h17.8c0.6 0 1.1 0.48 1.1 1.1v17.8c0 0.6-0.5 1.1-1.1 1.1h-5.1v-7.74h2.6l0.38-3.020h-2.98v-1.94c0-0.86 0.24-1.46 1.5-1.46h1.6v-2.7c-0.28-0.040-1.24-0.12-2.34-0.12-2.3 0-3.88 1.4-3.88 3.98v2.24h-2.6v3.020h2.6v7.74z'></path>
    </Icon>
  );
};

export default FacebookSquare;
