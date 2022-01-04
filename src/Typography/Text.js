import { fontSizes, fontWeights, lineHeight } from '../tokens/typography';
import styled from 'styled-components';
import { grey, red } from '../tokens/color';

import _get from 'lodash-es/get';

//p, span, bold,strong,pre,code,small,Label
// eslint-disable-next-line no-unused-vars
const Text = (_) => {
  return '';
};

const getTextSize = (props) => _get(props, 'size', 'inherit');
const getTextColor = (props) => _get(props, 'color', grey.z900);
const getTextMargin = (props) => _get(props, 'margin', 0);
const getTextLineHeight = (props) =>
  _get(lineHeight, `${props.lineHeight}`, lineHeight.medium);

Text.p = styled.p`
  font-size: ${getTextSize};
  line-height: ${getTextLineHeight};
  margin: ${getTextMargin} 0;
  color: ${getTextColor};
  /* & > a {
    display: inline-flex;
    color: ${red.z400};
    text-decoration: none;
    &:hover {
      color: ${red.z500};
    }
  } */
`;

Text.strong = styled.strong`
  line-height: ${lineHeight.medium};
  font-weight: ${fontWeights.medium};
  color: ${grey.z800};
  font-size: inherit;
`;

Text.underline = styled.span`
  color: ${grey.z800};
  font-size: inherit;
  text-decoration: underline;
`;

Text.Tag = styled.a`
  display: inline;
  font-size: 24px;
  line-height: 28px;
  color: ${red.z400};
  cursor: pointer;
  margin: 0;
  text-transform: capitalize;
  &:hover {
    color: ${red.z500};
  }
`;

Text.LargeP = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin: ${fontSizes.z300} 0;
  color: ${grey.z900};
`;

const P = Text.p;
const Strong = Text.strong;
const Underline = Text.underline;
const Tag = Text.Tag;

export default Text;

export { P, Strong, Underline, Tag };
