import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Play = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <g clipPath='url(#clip0)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.52081 0.122289C2.84189 -0.0530018 3.23305 -0.0389906 3.54076 0.158822L17.5408 9.15882C17.827 9.34282 18 9.65974 18 10C18 10.3403 17.827 10.6572 17.5408 10.8412L3.54076 19.8412C3.23305 20.039 2.84189 20.053 2.52081 19.8777C2.19974 19.7024 2 19.3658 2 19V1C2 0.634194 2.19974 0.297579 2.52081 0.122289Z'
        ></path>
      </g>
    </Icon>
  );
};

export default Play;
