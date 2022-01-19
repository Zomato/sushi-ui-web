import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const PullDownThick = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>pull-down-thick</title>
      <path d='M17.96 5.72c-0.193-0.198-0.462-0.321-0.76-0.321s-0.567 0.123-0.76 0.321l-0 0-6.44 6.46-6.44-6.46c-0.194-0.194-0.463-0.315-0.76-0.315-0.594 0-1.075 0.481-1.075 1.075 0 0.297 0.12 0.566 0.315 0.76v0l7.2 7.2c0.195 0.193 0.464 0.313 0.76 0.313s0.565-0.119 0.76-0.313l7.2-7.2c0.198-0.193 0.321-0.462 0.321-0.76s-0.123-0.567-0.321-0.76l-0-0z'></path>
    </Icon>
  );
};

export default PullDownThick;
