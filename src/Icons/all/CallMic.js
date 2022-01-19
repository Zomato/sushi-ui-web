import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const CallMic = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M10.05,13.5h.29a3.85,3.85,0,0,0,3.87-3.85h0V3.88A3.88,3.88,0,0,0,10.31,0h-.26A3.9,3.9,0,0,0,6.17,3.88V9.64A3.88,3.88,0,0,0,10.05,13.5Z'></path>
      <path d='M16.48,9.38a1,1,0,0,0-1,.88,5.63,5.63,0,0,1-10.88,0,1,1,0,0,0-1-.77H3.35a1,1,0,0,0-.74,1,1,1,0,0,0,0,.25v.06a7.64,7.64,0,0,0,6.52,5.63V19a1,1,0,0,0,2,0V16.41a7.62,7.62,0,0,0,6.19-5.65.75.75,0,0,0,.07-.36A1,1,0,0,0,16.48,9.38Z'></path>
    </Icon>
  );
};

export default CallMic;
