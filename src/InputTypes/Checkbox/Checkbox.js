// libraries
import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash-es/noop';
import styled from 'styled-components';

// helpers
import {
  getAttributes,
  getClickedAttributes,
  getType,
} from './checkboxHelpers';
import green from '../../tokens/color/green';
import teal from '../../tokens/color/teal';

const Checkbox = (props) => {
  const checkboxType = getType(props.disabled, props.solid);

  // eslint-disable-next-line no-unused-vars
  const onToggle = (e) => {
    e.stopPropagation();
    e.persist();
    props.onChange({ [props.value]: !props.checked }, e);
  };

  return (
    <Checkbox.Label {...props}>
      <Checkbox.Element
        key={props.value}
        disabled={props.disabled}
        cbType={checkboxType}
        type='checkbox'
        onChange={onToggle}
        checked={props.checked}
        aria-checked={props.checked}
        color={props.color}
      />
      {props.label}
    </Checkbox.Label>
  );
};

const getCursorState = ({ disabled }) => (disabled ? 'not-allowed' : 'pointer');

Checkbox.Label = styled.label`
  font-size: 14px;
  line-height: 1.2;
  color: #1c1c1c;
  height: 18px;
  cursor: ${getCursorState};
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100%;
  width: max-content;
`;

Checkbox.Element = styled.input`
  appearance: none;
  cursor: ${getCursorState};
  outline: 0;
  border-radius: 4px;
  margin-right: 8px;
  width: 18px;
  height: 18px;
  background: #fff;
  border: 2px solid ${getAttributes('borderColor')};
  box-sizing: border-box;
  position: relative;
  &:hover {
    border: 2px solid ${getAttributes('hoverBorderColor')};
  }
  transition: all 0.4s; // TODO transition

  &:checked::after {
    position: absolute;
    top: 3.5%;
    left: 30%;
    width: 0.55rem;
    height: 1rem;
    content: '';
    border-color: ${getClickedAttributes('tickColor')};
    border-style: solid;
    border-top: 0;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-left: 0;
    transform: rotate(48deg);
  }

  &:checked {
    border: 2px solid ${getClickedAttributes('borderColor')};
    background: ${getClickedAttributes('background')};
  }
`;

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  solid: PropTypes.bool,
  color: PropTypes.string,
};

Checkbox.defaultProps = {
  disabled: false,
  onChange: _noop,
  checked: false,
  solid: true,
  color: teal.z500,
};

export default Checkbox;
