import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lineHeight, fontWeights } from '../tokens/typography';
import { grey, black, yellow } from '../tokens/color';

// eslint-disable-next-line react/prop-types
const Mark = (props) => (
  <Mark.Element {...props}>{props.children}</Mark.Element>
);

Mark.Element = styled.mark`
  line-height: ${lineHeight.regular};
  padding: 0 0.2rem;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: ${fontWeights.bold};
  ${(props) => {
    switch (props.type) {
      case 'bg':
        return css`
          color: ${grey.z900};
          background-color: ${yellow.z200};
          font-weight: ${fontWeights.medium};
        `;
      case 'strikethrough':
        return css`
          color: ${grey.z800};
          text-decoration-line: line-through;
          background-color: transparent;
        `;
      default:
        return css`
          color: ${black};
          background-color: transparent;
          font-weight: ${fontWeights.medium};
        `;
    }
  }}
`;

Mark.propTypes = {
  type: PropTypes.oneOf(['bg', 'text', 'strikethrough']),
  children: PropTypes.node,
};

Mark.defaultProps = {
  type: 'text',
};

export default Mark;
