import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const CrossCircle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M1.5 10C1.5 5.3125 5.3125 1.5 10 1.5C14.6875 1.5 18.5 5.3125 18.5 10C18.5 14.6875 14.6875 18.5 10 18.5C5.3125 18.5 1.5 14.6875 1.5 10ZM0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10ZM13.375 6.625C13.0625 6.3125 12.625 6.3125 12.3125 6.625L10 8.9375L7.6875 6.625C7.4375 6.3125 6.9375 6.3125 6.625 6.625C6.3125 6.9375 6.3125 7.375 6.625 7.6875L8.9375 10L6.625 12.3125C6.3125 12.5625 6.3125 13.0625 6.625 13.375C6.75 13.5 6.9375 13.625 7.1875 13.625C7.375 13.625 7.5625 13.5625 7.6875 13.375L10 11.0625L12.3125 13.375C12.4375 13.5 12.625 13.625 12.8125 13.625C13 13.625 13.1875 13.5625 13.375 13.375C13.6875 13.0625 13.6875 12.625 13.375 12.3125L11.0625 10L13.375 7.6875C13.6875 7.375 13.6875 6.9375 13.375 6.625Z'></path>
    </Icon>
  );
};

export default CrossCircle;
