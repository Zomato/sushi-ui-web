import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const ExclamationLine = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>exclamation-line</title>
      <path d='M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c0-5.523-4.477-10-10-10v0zM10 18.58c-4.739 0-8.58-3.841-8.58-8.58s3.841-8.58 8.58-8.58c4.739 0 8.58 3.841 8.58 8.58v0c0 4.739-3.841 8.58-8.58 8.58v0zM11.42 15c0 0.784-0.636 1.42-1.42 1.42s-1.42-0.636-1.42-1.42c0-0.784 0.636-1.42 1.42-1.42v0c0.784 0 1.42 0.636 1.42 1.42v0zM11.42 5.24v5.48c0 0.784-0.636 1.42-1.42 1.42s-1.42-0.636-1.42-1.42v0-5.48c0-0.784 0.636-1.42 1.42-1.42s1.42 0.636 1.42 1.42v0z'></path>
    </Icon>
  );
};

export default ExclamationLine;
