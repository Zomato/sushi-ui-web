import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const OrderHistory = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>order-history</title>
      <path d='M16.9 0h-13.8c-1.712 0-3.1 1.388-3.1 3.1v0 7.14c0 0.398 0.322 0.72 0.72 0.72v0h4.040v5.94c0 1.712 1.388 3.1 3.1 3.1v0h9.040c1.712 0 3.1-1.388 3.1-3.1v0-13.8c0-1.712-1.388-3.1-3.1-3.1v0zM1.42 9.52v-6.42c0-0.922 0.748-1.67 1.67-1.67s1.67 0.748 1.67 1.67v0 6.42zM18.58 16.9c0 0.928-0.752 1.68-1.68 1.68v0h-9.040c-0.919-0.011-1.66-0.759-1.66-1.68 0-0 0-0 0-0v0-13.8c-0.002-0.199-0.023-0.392-0.063-0.579l0.003 0.019v-0.16c-0.045-0.16-0.092-0.293-0.148-0.421l0.008 0.021c0.002-0.018 0.003-0.039 0.003-0.060s-0.001-0.042-0.003-0.063l0 0.003c-0.082-0.168-0.175-0.312-0.283-0.444l0.003 0.004h11.18c0.928 0 1.68 0.752 1.68 1.68v0zM16.66 5.24c0 0 0 0 0 0 0 0.391-0.311 0.709-0.699 0.72l-0.001 0h-7.14c-0.398 0-0.72-0.322-0.72-0.72s0.322-0.72 0.72-0.72v0h7.14c0.389 0.011 0.7 0.329 0.7 0.72 0 0 0 0 0 0v-0zM16.66 9.28c0 0 0 0 0 0 0 0.391-0.311 0.709-0.699 0.72l-0.001 0h-7.14c-0.343-0.059-0.6-0.355-0.6-0.71s0.258-0.651 0.596-0.709l0.004-0.001h7.14c0.382 0.011 0.689 0.318 0.7 0.699l0 0.001zM16.66 15.48c-0 0.663-0.537 1.2-1.2 1.2s-1.2-0.537-1.2-1.2 0.537-1.2 1.2-1.2c0.007 0 0.014 0 0.021 0l-0.001-0c0.654 0.011 1.18 0.544 1.18 1.2 0 0 0 0 0 0v-0z'></path>
    </Icon>
  );
};

export default OrderHistory;
