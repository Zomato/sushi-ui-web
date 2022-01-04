import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const WindowsFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>windows-Fill</title>
      <path d='M0 3.24l8.14-1.1 0.020 7.86-8.16 0.040v-6.8zM8.14 10.9l0.020 7.88-8.16-1.12v-6.8l8.14 0.040zM9.14 2l10.8-1.58v9.48l-10.8 0.080v-7.98zM19.94 10.98v9.44l-10.8-1.52-0.020-7.94 10.82 0.020z'></path>
    </Icon>
  );
};

export default WindowsFill;
