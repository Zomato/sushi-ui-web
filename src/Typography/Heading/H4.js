import { fontSizes, fontWeights, lineHeight } from '../../tokens/typography';
import black from '../../tokens/color/black';
import styled, { css } from 'styled-components';

const defaultMargin = css`
  margin: 0;
`;

const H4 = styled.h4`
  font-size: ${(props) => props.fontSize || fontSizes.z600}; // TODO
  line-height: ${lineHeight.regular};
  font-weight: ${fontWeights.regular};
  color: ${(props) => props.color || black};
  ${defaultMargin}
  margin-block-end: 0;
`;

export default H4;
