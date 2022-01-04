import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const RadioActive = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>radio-active</title>
      <path d='M10 1.42c4.739 0 8.58 3.841 8.58 8.58s-3.841 8.58-8.58 8.58c-4.739 0-8.58-3.841-8.58-8.58v0c0-4.739 3.841-8.58 8.58-8.58v0M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c0-5.523-4.477-10-10-10v0zM10 4.28c-3.159 0-5.72 2.561-5.72 5.72s2.561 5.72 5.72 5.72c3.159 0 5.72-2.561 5.72-5.72v0c0-3.159-2.561-5.72-5.72-5.72v0z'></path>
    </Icon>
  );
};

export default RadioActive;
