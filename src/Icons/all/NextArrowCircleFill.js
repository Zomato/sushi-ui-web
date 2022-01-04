import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const NextArrowCircleFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10ZM9.5 14.5C9.1875 14.25 9.1875 13.75 9.5 13.4375L12.25 10.6875H6C5.5625 10.6875 5.25 10.375 5.25 9.9375C5.25 9.5 5.5625 9.1875 6 9.1875H12.1875L9.4375 6.4375C9.125 6.1875 9.125 5.6875 9.4375 5.375C9.75 5.0625 10.1875 5.125 10.5 5.375L14.5 9.375C14.5625 9.4375 14.625 9.5625 14.6875 9.625C14.75 9.75 14.75 9.8125 14.75 9.9375C14.75 10.125 14.6875 10.3125 14.5 10.4375L10.5 14.4375C10.25 14.8125 9.75 14.8125 9.5 14.5Z'></path>
    </Icon>
  );
};

export default NextArrowCircleFill;
