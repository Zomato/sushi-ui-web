import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Trending = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>Artboard 109</title>
      <path d='M17.85,5.1a.77.77,0,0,0-.45-.45.88.88,0,0,0-.32-.07H13.54a.84.84,0,0,0-.83.84.83.83,0,0,0,.83.83h1.53l-4,4L9.13,8.37A.83.83,0,0,0,8,8.37L2.33,14a.83.83,0,0,0,0,1.18.79.79,0,0,0,.59.25.83.83,0,0,0,.59-.25l5-5,1.91,1.91a.85.85,0,0,0,1.18,0l4.62-4.62V9a.83.83,0,0,0,.83.83A.84.84,0,0,0,17.92,9V5.42A.88.88,0,0,0,17.85,5.1Z'></path>
    </Icon>
  );
};

export default Trending;
