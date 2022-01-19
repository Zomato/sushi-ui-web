import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const TimeFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>time-fill</title>
      <path d='M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c0-5.523-4.477-10-10-10v0zM14.76 10.96h-4.76c-0.349-0.004-0.653-0.194-0.818-0.475l-0.002-0.005-2.86-4.76c-0.13-0.162-0.209-0.371-0.209-0.598 0-0.53 0.43-0.96 0.96-0.96 0.4 0 0.743 0.244 0.887 0.592l0.002 0.006 2.58 4.28h4.22c0.53 0 0.96 0.43 0.96 0.96s-0.43 0.96-0.96 0.96v0z'></path>
    </Icon>
  );
};

export default TimeFill;
