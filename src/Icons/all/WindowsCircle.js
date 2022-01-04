import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const WindowsCircle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM5 6.5V10L9.25 9.9375V5.875L5 6.5ZM9.25 10.4375H5V14L9.25 14.5625V10.4375ZM9.75 5.8125V10L15.375 9.9375V5L9.75 5.8125ZM15.375 10.5H9.75V14.625L15.375 15.4375V10.5Z'></path>
    </Icon>
  );
};

export default WindowsCircle;
