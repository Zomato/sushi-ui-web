import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const YoutubeFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>youtube-fill</title>
      <path d='M19.58 5.66c0.42 1.6 0.42 4.94 0.42 4.94s0 3.34-0.42 4.94c-0.22 0.88-0.9 1.58-1.76 1.82-1.56 0.44-7.82 0.44-7.82 0.44s-6.26 0-7.82-0.44c-0.86-0.24-1.54-0.94-1.76-1.82-0.42-1.6-0.42-4.94-0.42-4.94s0-3.34 0.42-4.94c0.22-0.88 0.9-1.58 1.76-1.82 1.56-0.42 7.82-0.42 7.82-0.42s6.26 0 7.82 0.42c0.86 0.24 1.54 0.94 1.76 1.82zM8.12 14.040l5-3.12-5-3.12v6.24z'></path>
    </Icon>
  );
};

export default YoutubeFill;
