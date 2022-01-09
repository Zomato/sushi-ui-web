import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './globalStyles';

const RootComponent = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

RootComponent.propTypes = {
  children: PropTypes.node,
};

export default RootComponent;
