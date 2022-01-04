import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const ProfileUserFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <circle cx='10' cy='4.5' r='4.5'></circle>
      <path d='M18.18,14.73c-2.35-4.6-6.49-4.48-8.15-4.48s-5.86-.12-8.21,4.48C.59,17.14,1.29,20,4.54,20H15.46C18.71,20,19.41,17.14,18.18,14.73Z'></path>
    </Icon>
  );
};

export default ProfileUserFill;
