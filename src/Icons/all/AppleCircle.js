import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const AppleCircle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM11.3125 6.6875C11.625 6.25 11.9375 5.625 11.8125 5C11.25 5.0625 10.625 5.375 10.25 5.875C9.9375 6.3125 9.625 6.9375 9.75 7.5C10.3125 7.5 10.9375 7.1875 11.3125 6.6875ZM14.3125 12.625C12.5625 11.9375 12.25 9.4375 14 8.5C13.4375 7.8125 12.75 7.4375 12 7.4375C11.0625 7.4375 10.6875 7.875 10 7.875C9.3125 7.875 8.8125 7.4375 8 7.4375C7.1875 7.4375 6.375 7.9375 5.8125 8.75C5.0625 9.9375 5.1875 12.125 6.4375 14C6.875 14.6875 7.4375 15.4375 8.1875 15.4375C8.875 15.4375 9.0625 15 10 15C10.9375 15 11.0625 15.4375 11.75 15.4375C12.5 15.4375 13.125 14.625 13.5625 13.9375C13.9375 13.4375 14.0625 13.1875 14.3125 12.625Z'></path>
    </Icon>
  );
};

export default AppleCircle;
