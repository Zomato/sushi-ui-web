import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const SoundOn = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>sound-on</title>
      <path d='M12.24 2.7c-0.106-0.062-0.234-0.099-0.37-0.099s-0.264 0.037-0.373 0.101l0.003-0.002-5.28 3.72h-2.64c-0.928 0-1.68 0.752-1.68 1.68v0 3.8c0 0.928 0.752 1.68 1.68 1.68v0h2.64l5.28 3.68c0.112 0.075 0.25 0.12 0.398 0.12 0.001 0 0.001 0 0.002 0h-0c0.124-0.002 0.241-0.031 0.345-0.082l-0.005 0.002c0.227-0.128 0.377-0.366 0.38-0.64v-13.32c-0.003-0.274-0.153-0.512-0.376-0.638l-0.004-0.002zM3.34 11.9v-3.8c0-0.133 0.107-0.24 0.24-0.24v0h2.14v4.28h-2.14c-0.133 0-0.24-0.107-0.24-0.24v0zM11.2 15.3l-4.060-2.82v-4.96l4.060-2.82zM18.1 10c-0.002 1.909-0.706 3.653-1.868 4.989l0.008-0.009c-0.128 0.158-0.322 0.259-0.54 0.26h-0c-0.392-0.008-0.706-0.327-0.706-0.72 0-0.176 0.063-0.336 0.167-0.461l-0.001 0.001c0.937-1.083 1.508-2.505 1.508-4.060s-0.571-2.977-1.514-4.068l0.007 0.008c-0.113-0.127-0.183-0.295-0.183-0.48 0-0.399 0.323-0.722 0.723-0.722 0.214 0 0.407 0.093 0.539 0.242l0.001 0.001c1.156 1.329 1.86 3.076 1.86 4.989 0 0.011-0 0.022-0 0.033v-0.002zM15.62 10c-0.007 0.988-0.369 1.89-0.965 2.585l0.005-0.005c-0.132 0.148-0.324 0.24-0.537 0.24-0.001 0-0.002 0-0.004 0h0c-0.392-0.008-0.706-0.327-0.706-0.72 0-0.176 0.063-0.336 0.167-0.461l-0.001 0.001c0.373-0.439 0.6-1.013 0.6-1.64s-0.227-1.201-0.603-1.644l0.003 0.004c-0.114-0.127-0.184-0.295-0.184-0.48 0-0.215 0.094-0.407 0.243-0.539l0.001-0.001c0.126-0.104 0.29-0.167 0.468-0.167 0.219 0 0.416 0.095 0.551 0.246l0.001 0.001c0.591 0.69 0.953 1.592 0.96 2.579v0.001z'></path>
    </Icon>
  );
};

export default SoundOn;
