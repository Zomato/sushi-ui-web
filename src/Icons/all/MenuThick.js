import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const MenuThick = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>menu-thick</title>
      <path d='M0.96 3.58h18.080c0.53 0 0.96-0.43 0.96-0.96s-0.43-0.96-0.96-0.96v0h-18.080c-0.53 0-0.96 0.43-0.96 0.96s0.43 0.96 0.96 0.96v0zM19.040 9.040h-18.080c-0.53 0-0.96 0.43-0.96 0.96s0.43 0.96 0.96 0.96v0h18.080c0.53 0 0.96-0.43 0.96-0.96s-0.43-0.96-0.96-0.96v0zM19.040 16.66h-18.080c-0.53 0-0.96 0.43-0.96 0.96s0.43 0.96 0.96 0.96v0h18.080c0.53 0 0.96-0.43 0.96-0.96s-0.43-0.96-0.96-0.96v0z'></path>
    </Icon>
  );
};

export default MenuThick;
