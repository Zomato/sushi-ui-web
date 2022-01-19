import { fontSizes, fontWeights, lineHeight } from '../../tokens/typography';
import black from '../../tokens/color/black';
import styled, { css } from 'styled-components';

const defaultMargin = css`
  margin: 0;
`;
const H1 = styled.h1`
  font-size: ${(props) => props.fontSize || fontSizes.z900}; // TODO
  line-height: ${lineHeight.regular};
  font-weight: ${fontWeights.regular};
  color: ${(props) => props.color || black};
  ${defaultMargin}
`;

export default H1;
