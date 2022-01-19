import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const MailCircle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20ZM10.1875 9.5625C11.0625 9.5625 15.4375 7.125 15.4375 7.125V6.6875C15.4375 6.1875 15.0625 5.8125 14.5625 5.8125H5.875C5.375 5.8125 5 6.25 5 6.6875V7.0625C5 7.0625 9.375 9.5625 10.1875 9.5625ZM10.1875 10.75C9.375 10.75 5 8.4375 5 8.4375V13.6875C5 14.125 5.375 14.5625 5.875 14.5625H14.5625C15.0625 14.5625 15.4375 14.1875 15.4375 13.6875V8.4375C15.4375 8.4375 11.125 10.75 10.1875 10.75Z'></path>
    </Icon>
  );
};

export default MailCircle;
