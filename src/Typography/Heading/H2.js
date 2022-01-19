import { fontSizes, fontWeights, lineHeight } from '../../tokens/typography';
import black from '../../tokens/color/black';
import styled, { css } from 'styled-components';

const defaultMargin = css`
  margin: 0;
`;
const H2 = styled.h2`
  font-size: 1.5rem;
  font-size: ${(props) => props.fontSize || fontSizes.z800}; // TODO
  line-height: ${lineHeight.regular};
  font-weight: ${fontWeights.regular};
  color: ${(props) => props.color || black};
  ${defaultMargin}
`;

export default H2;
