// libraries
import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash-es/noop';
import styled from 'styled-components';
import Label from '../Label';
import white from '../tokens/color/white';
import { zSpacing } from '../tokens/spacing';

// helpers
import { getAttributes } from './radioHelpers';

export const Radio = (props) => (
  <Radio.Wrapper
    marginBottom={props.marginBottom}
    marginRight={props.marginRight}
  >
    <Label>
      <Radio.Element {...props} type='radio' />
      <Svg viewBox='0 0 20 20' id='circle'>
        <OuterCircle cx='10' cy='10' r='8' {...props} />
        {props.checked && <InnerCircle cx='10' cy='10' r='5' {...props} />}
      </Svg>
      <Radio.Label disabled={props.disabled} textColor={props.textColor}>
        {props.label}
      </Radio.Label>
    </Label>
  </Radio.Wrapper>
);

Radio.Label = styled.span`
  padding-top: 0.2rem;
  cursor: ${getAttributes('cursor')};
  color: ${getAttributes('textColor')};
  margin: 0 0 0.1rem 0.8rem;
`;

Radio.Wrapper = styled.section`
  width: max-content;
  margin-bottom: ${(props) => props.marginBottom || zSpacing.z3};
  margin-right: ${(props) => props.marginRight || zSpacing.z4};
`;

const Svg = styled.svg`
  height: 2.2rem;
  width: 2.2rem;
`;

const OuterCircle = styled.circle`
  stroke: ${getAttributes('borderColor')};
  stroke-width: 1px;
  fill: ${white};
  ${Radio.Wrapper}:hover & {
    stroke: ${getAttributes('hoverBorderColor')};
  }
`;

const InnerCircle = styled.circle`
  fill: ${getAttributes('selectedBgColor')};
`;

Radio.Element = styled.input`
  display: none;
`;

Radio.propTypes = {
  class: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
  textColor: PropTypes.string,
};

Radio.defaultProps = {
  value: '1',
  disabled: false,
  onClick: _noop,
  checked: false,
};

export default Radio;
