import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const CheckCircleFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <g clipPath='url(#clip0)'>
        <path d='M14.75 8.3125L9.25 13.8125C9.125 13.9375 8.9375 14.0625 8.75 14.0625C8.5625 14.0625 8.375 14 8.1875 13.8125L5.1875 10.8125C4.875 10.5 4.875 10.0625 5.1875 9.75C5.5 9.4375 5.9375 9.4375 6.25 9.75L8.75 12.1875L13.6875 7.25C14 6.9375 14.4375 6.9375 14.75 7.25C15.0625 7.5625 15.0625 8 14.75 8.3125ZM17.0625 2.9375C13.125 -1 6.8125 -1 2.9375 2.9375C-0.9375 6.8125 -0.9375 13.1875 2.9375 17.0625C6.875 21 13.1875 21 17.125 17.0625C21.0625 13.125 21 6.8125 17.0625 2.9375Z'></path>
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='20' height='20'></rect>
        </clipPath>
      </defs>
    </Icon>
  );
};

export default CheckCircleFill;
