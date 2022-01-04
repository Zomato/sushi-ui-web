import { fontSizes, fontWeights, lineHeight } from '../../tokens/typography';
import black from '../../tokens/color/black';
import styled, { css } from 'styled-components';

const defaultMargin = css`
  margin: 0;
`;
const H6 = styled.h6`
  font-size: ${(props) => props.fontSize || fontSizes.z400}; // TODO
  line-height: ${lineHeight.regular};
  font-weight: ${fontWeights.regular};
  color: ${(props) => props.color || black};
  ${defaultMargin}
`;

export default H6;
