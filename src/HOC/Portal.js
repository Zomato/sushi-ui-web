import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Portal = (props) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient
    ? ReactDOM.createPortal(
        <Portal.Wrapper>{props.children}</Portal.Wrapper>,
        document.querySelector('body'),
      )
    : null;
};

Portal.propTypes = {
  children: PropTypes.node,
};

Portal.Wrapper = styled.div``;

export default Portal;
