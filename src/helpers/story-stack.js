import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const alignItems = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const justifyContent = {
  fill: 'space-between',
  'space-between': 'space-between',
  left: 'flex-start',
  right: 'flex-end',
};

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: ${(props) => alignItems[props.alignVertical]};
  justify-content: ${(props) => justifyContent[props.align]};
  line-height: inherit;
  > * {
    flex: ${(props) => (props.align === 'fill' ? 1 : 'none')};
    margin-top: 0.5rem;
  }
  > *:last-child {
    margin-right: 0;
  }
`;

const StackedItem = styled.div`
  flex-basis: ${(props) => props.width}%;
  line-height: inherit;
`;

const Stack = (props) => {
  let children;
  if (props.align === 'fill' || props.align === 'space-between') {
    children = React.Children.map(props.children, (child, index) => {
      let width = 0;
      if (props.widths) width = `${props.widths[index]}` || 0;

      return <StackedItem width={width}>{child}</StackedItem>;
    });
  } else {
    children = props.children;
  }

  return (
    <StyledStack {...props} align={props.align}>
      {children}
    </StyledStack>
  );
};

Stack.propTypes = {
  /** Use align for stacking elements without margin between them */
  align: PropTypes.oneOf(['fill', 'left', 'right', 'space-between']),
  /** Vertically align */
  alignVertical: PropTypes.oneOf(['top', 'center', 'bottom']),
  widths: PropTypes.array,
  children: PropTypes.Children,
};

Stack.defaultProps = {
  align: 'fill',
  alignVertical: 'center',
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;
export default Stack;
export { Wrapper };
