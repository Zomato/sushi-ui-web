import React from 'react';

import GlobalStyles from './globalstyles';

const RootComponent = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export default RootComponent;
