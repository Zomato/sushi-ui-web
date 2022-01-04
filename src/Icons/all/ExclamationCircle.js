import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const ExclamationCircle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M10 0C4.47688 0 0 4.47688 0 10C0 15.5231 4.47688 20 10 20C15.5231 20 20 15.5231 20 10C20 4.47688 15.5231 0 10 0ZM10 16.42C9.21563 16.42 8.58 15.7844 8.58 15C8.58 14.2156 9.21563 13.58 10 13.58C10.7844 13.58 11.42 14.2156 11.42 15C11.42 15.7844 10.7844 16.42 10 16.42V16.42ZM11.42 10.72C11.42 11.5044 10.7844 12.14 10 12.14C9.21563 12.14 8.58 11.5044 8.58 10.72V5.24C8.58 4.45562 9.21563 3.82 10 3.82C10.7844 3.82 11.42 4.45562 11.42 5.24V10.72Z'></path>
    </Icon>
  );
};

export default ExclamationCircle;
