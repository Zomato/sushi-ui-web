import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const PlaystoreCircle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20ZM6.9375 5.25C6.6875 5.0625 6.4375 5.0625 6.125 5.125L10.875 9.8125L12.4375 8.3125C12.4375 8.25 6.9375 5.25 6.9375 5.25ZM5.5625 5.5C5.4375 5.6875 5.3125 5.875 5.3125 6.125V14.5C5.3125 14.75 5.375 14.9375 5.5625 15.125L10.4375 10.3125C10.4375 10.25 5.5625 5.5 5.5625 5.5ZM14.4375 9.375L13.0625 8.625L11.375 10.3125L13.0625 12L14.4375 11.25C14.75 11.0625 15 10.75 15 10.375C15 9.9375 14.8125 9.5625 14.4375 9.375ZM10.875 10.75L6.125 15.4375C6.1875 15.4375 6.3125 15.5 6.375 15.5C6.5625 15.5 6.75 15.4375 6.9375 15.3125L12.4375 12.25C12.4375 12.3125 10.875 10.75 10.875 10.75Z'></path>
    </Icon>
  );
};

export default PlaystoreCircle;
