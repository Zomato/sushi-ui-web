import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const MenuLine = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>menu-line</title>
      <path d='M16.66 4.28v1.44c0 0.133-0.107 0.24-0.24 0.24v0h-12.84c-0.133 0-0.24-0.107-0.24-0.24v0-1.44c0-0.133 0.107-0.24 0.24-0.24v0h12.84c0.133 0 0.24 0.107 0.24 0.24v0zM16.42 9.040h-12.84c-0.133 0-0.24 0.107-0.24 0.24v0 1.44c0 0.133 0.107 0.24 0.24 0.24v0h12.84c0.133 0 0.24-0.107 0.24-0.24v0-1.44c0-0.133-0.107-0.24-0.24-0.24v0zM16.42 14.040h-12.84c-0.133 0-0.24 0.107-0.24 0.24v0 1.44c0 0.133 0.107 0.24 0.24 0.24v0h12.84c0.133 0 0.24-0.107 0.24-0.24v0-1.44c0-0.133-0.107-0.24-0.24-0.24v0z'></path>
    </Icon>
  );
};

export default MenuLine;
