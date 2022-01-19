import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const SoundNo = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>sound-no</title>
      <path d='M12.24 2.7c-0.106-0.062-0.234-0.099-0.37-0.099s-0.264 0.037-0.373 0.101l0.003-0.002-5.28 3.72h-2.64c-0.928 0-1.68 0.752-1.68 1.68v0 3.8c0 0.928 0.752 1.68 1.68 1.68v0h2.64l5.28 3.68c0.112 0.075 0.25 0.12 0.398 0.12 0.001 0 0.001 0 0.002 0h-0c0.124-0.002 0.241-0.031 0.345-0.082l-0.005 0.002c0.227-0.128 0.377-0.366 0.38-0.64v-13.32c-0.003-0.274-0.153-0.512-0.376-0.638l-0.004-0.002zM3.34 11.9v-3.8c0-0.133 0.107-0.24 0.24-0.24v0h2.14v4.28h-2.14c-0.133 0-0.24-0.107-0.24-0.24v0zM11.2 15.3l-4.060-2.82v-4.96l4.060-2.82zM17.86 11.16c0.131 0.13 0.212 0.311 0.212 0.51s-0.081 0.38-0.212 0.51l-0 0c-0.13 0.131-0.311 0.212-0.51 0.212s-0.38-0.081-0.51-0.212l-0-0-1.12-1.18-1.16 1.18c-0.13 0.131-0.311 0.212-0.51 0.212s-0.38-0.081-0.51-0.212l-0-0c-0.131-0.13-0.212-0.311-0.212-0.51s0.081-0.38 0.212-0.51l1.16-1.16-1.16-1.16c-0.131-0.131-0.211-0.311-0.211-0.51 0-0.398 0.323-0.721 0.721-0.721 0.199 0 0.379 0.081 0.51 0.211v0l1.16 1.16 1.16-1.16c0.119-0.091 0.271-0.146 0.435-0.146 0.398 0 0.72 0.322 0.72 0.72 0 0.169-0.058 0.325-0.156 0.448l0.001-0.001-1.16 1.16z'></path>
    </Icon>
  );
};

export default SoundNo;
