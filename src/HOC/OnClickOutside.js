import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash-es/noop';

const OnClickOutside = (props) => {
  const node = useRef();
  const { handleClickOutside: clickHandler, removeHandler } = props;

  useEffect(() => {
    if (typeof clickHandler === 'function' && !removeHandler) {
      const handleOutsideClick = (e) => {
        if (node.current && node.current.contains(e.target)) {
          return;
        }
        clickHandler(e);
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
    return _noop;
  }, [clickHandler, removeHandler]);

  return (
    <OnClickOutside.Wrapper {...props} ref={node}>
      {props.children}
    </OnClickOutside.Wrapper>
  );
};

OnClickOutside.Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : 'max-content')};
`;

OnClickOutside.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node,
  handleClickOutside: PropTypes.func.isRequired,
  removeHandler: PropTypes.bool,
};

OnClickOutside.defaultProps = {
  removeHandler: false,
};

export default OnClickOutside;
