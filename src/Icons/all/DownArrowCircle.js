import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const DownArrowCircle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5 10 18.5C14.6875 18.5 18.5 14.6875 18.5 10C18.5 5.3125 14.6875 1.5 10 1.5ZM10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20ZM5.5 9.4375C5.75 9.1875 6.25 9.1875 6.5625 9.4375L9.3125 12.1875V6C9.3125 5.5625 9.625 5.25 10.0625 5.25C10.5 5.25 10.8125 5.5625 10.8125 6V12.1875L13.5625 9.4375C13.8125 9.1875 14.3125 9.1875 14.625 9.4375C14.9375 9.6875 14.875 10.1875 14.625 10.5L10.625 14.5C10.5625 14.5625 10.4375 14.625 10.375 14.6875C10.3125 14.75 10.1875 14.75 10.125 14.75C9.9375 14.75 9.75 14.6875 9.625 14.5L5.625 10.5C5.1875 10.25 5.1875 9.75 5.5 9.4375Z'></path>
    </Icon>
  );
};

export default DownArrowCircle;
