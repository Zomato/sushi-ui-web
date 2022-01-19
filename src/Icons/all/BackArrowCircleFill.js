import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const BackArrowCircleFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10ZM10.5625 5.4375C10.8125 5.75 10.8125 6.1875 10.5625 6.5L7.8125 9.25H14C14.4375 9.25 14.75 9.5625 14.75 10C14.75 10.4375 14.4375 10.75 14 10.75H7.8125L10.5625 13.5C10.8125 13.8125 10.8125 14.25 10.5625 14.5625C10.3125 14.875 9.8125 14.875 9.5 14.5625L5.5 10.5625C5.4375 10.5 5.375 10.4375 5.3125 10.3125C5.3125 10.25 5.25 10.125 5.25 10.0625C5.25 9.875 5.3125 9.6875 5.5 9.5L9.5 5.5C9.75 5.1875 10.25 5.1875 10.5625 5.4375Z'></path>
    </Icon>
  );
};

export default BackArrowCircleFill;
