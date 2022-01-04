import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const FacebookFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>facebook-fill</title>
      <path d='M11.2 20.42v-10h2.76l0.38-3.46h-3.14l0.020-1.72c0-0.9 0.080-1.38 1.36-1.38h1.74v-3.44h-2.76c-3.32 0-4.5 1.66-4.5 4.48v2.060h-2.060v3.46h2.060v10h4.14z'></path>
    </Icon>
  );
};

export default FacebookFill;
