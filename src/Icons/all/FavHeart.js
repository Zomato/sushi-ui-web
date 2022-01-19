import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const FavHeart = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>fav-heart</title>
      <path d='M10 18.82c-0.115-0.002-0.225-0.024-0.327-0.062l0.007 0.002c-0.080 0-7.16-2.78-9.32-9.060-0.36-1.080-0.96-4.68 1.2-6.92 0.834-0.981 2.070-1.6 3.45-1.6 0.003 0 0.007 0 0.010 0h-0.001c2.008 0.076 3.779 1.030 4.95 2.487l0.010 0.013c1.15-1.525 2.959-2.5 4.995-2.5 0.009 0 0.018 0 0.026 0h-0.001c1.376 0.003 2.608 0.621 3.435 1.594l0.005 0.006c2.16 2.24 1.58 5.84 1.2 6.92-2.16 6.28-9.24 9.020-9.32 9.060-0.095 0.036-0.205 0.058-0.319 0.060h-0.001zM5.020 3.1c-0.006-0-0.013-0-0.021-0-0.833 0-1.575 0.389-2.055 0.995l-0.004 0.005c-1.4 1.46-1.040 4.16-0.78 4.98 1.66 4.66 6.52 7.1 7.84 7.74 1.32-0.6 6.24-3.080 7.84-7.74 0.28-0.82 0.62-3.52-0.78-4.98-0.484-0.611-1.226-1-2.059-1-0 0-0.001 0-0.001 0h0c-0.003 0-0.006 0-0.009 0-1.858 0-3.45 1.136-4.121 2.75l-0.011 0.030c-0.161 0.319-0.485 0.533-0.86 0.533s-0.699-0.215-0.857-0.528l-0.003-0.005c-0.75-1.585-2.296-2.682-4.108-2.779l-0.012-0.001z'></path>
    </Icon>
  );
};

export default FavHeart;
