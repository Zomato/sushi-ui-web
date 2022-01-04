/* eslint-disable no-unused-vars */
// libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash-es/noop';
import _get from 'lodash-es/get';
import _isEmpty from 'lodash-es/isEmpty';

// helpers
import {
  getAttributes,
  getLabelAttr,
  getState,
  getHelperText,
  onValueChange,
  onBlurred,
} from '../inputHelper';
import misc from '../../tokens/misc';

const Textarea = React.forwardRef((props, ref) => {
  const [focused, toggleFocus] = useState(false);
  const onFocusToggle = (_) => {
    toggleFocus(!focused);
  };
  const state = getState(props, focused);
  const helperTxt = getHelperText(props.helperText, props.errorMsg);
  const textAreaProps = {
    resize: props.resize,
    width: props.innerWidth,
    icon: props.icon,
    disabled: props.disabled,
    fullWidth: props.fullWidth,
    rows: props.dynamicHeight ? 1 : props.rows,
    name: props.name,
    dynamicHeight: props.dynamicHeight,
    value: props.value,
    autoFocus: props.autoFocus,
    ref,
  };

  // Changes height of textarea through ref. After that, make changes to onChange
  const changeHandler = (e) => {
    if (props.dynamicHeight && !_isEmpty(ref)) {
      ref.current.style.height = 'auto';
      const scrollHeight = _get(ref, 'current.scrollHeight', 0);
      if (scrollHeight) {
        ref.current.style.height = `${scrollHeight}px`;
      }
    }

    onValueChange(props)(e);
  };

  const { onChange, ...otherProps } = props;

  return (
    <Textarea.Wrapper
      {...otherProps}
      onFocus={onFocusToggle}
      onBlur={onBlurred(props, onFocusToggle)}
      fullWidth={props.fullWidth}
    >
      <Textarea.Element
        {...textAreaProps}
        state={state}
        onChange={changeHandler}
        tabIndex='1'
      />
      {props.disabled ? (
        <Textarea.LabelDisabled showLbl state={state}>
          {props.label}
        </Textarea.LabelDisabled>
      ) : (
        <Textarea.Label showLbl={focused || !!props.value} state={state}>
          {props.label}
        </Textarea.Label>
      )}
      {helperTxt && (
        <Textarea.Helper state={state}>{helperTxt}</Textarea.Helper>
      )}
    </Textarea.Wrapper>
  );
});

const getResize = (props) => props.resize;

Textarea.Helper = styled.div`
  height: 13px;
  color: ${getAttributes('helperColor')};
  font-size: 11px;
  line-height: 13px;
  margin-top: 5px;
`;

Textarea.Wrapper = styled.section`
  position: relative;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;

Textarea.Label = styled.label`
  position: absolute;
  pointer-events: none;
  transition: 0.2s ease all; // TODO transition
  color: ${getAttributes('placeholder')};
  top: ${getLabelAttr('top')};
  left: ${getLabelAttr('left')};
  font-size: ${getLabelAttr('fontSize')};
  background: ${getLabelAttr('background')};
  padding: ${getLabelAttr('padding')};
`;

Textarea.LabelDisabled = styled.label`
  position: absolute;
  pointer-events: none;
  color: ${getAttributes('placeholder')};
  top: ${getLabelAttr('top')};
  left: ${getLabelAttr('left')};
  font-size: ${getLabelAttr('fontSize')};
  background: ${getLabelAttr('labelBackground')};
  padding: ${getLabelAttr('padding')};
`;

Textarea.Element = styled.textarea`
  padding: ${getAttributes('padding')};
  background: ${getAttributes('background')};
  border: ${getAttributes('borderWidth')} ${getAttributes('borderColor')};
  font-size: ${getAttributes('fontSize')};
  width: ${getAttributes('width')};
  outline: none;
  &::-webkit-input-placeholder {
    color: #a9a9a9;
  }
  box-sizing: border-box;
  border-radius: ${misc.radius};
  resize: ${getResize};
  color: ${getAttributes('text')};
  overflow: ${({ dynamicHeight }) => (dynamicHeight ? 'hidden' : 'auto')};
`;

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  innerWidth: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  resize: PropTypes.string,
  helperText: PropTypes.string,
  icon: PropTypes.string,
  fullWidth: PropTypes.bool,
  errorMsg: PropTypes.string,
  dynamicHeight: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

Textarea.defaultProps = {
  color: 'white',
  disabled: false,
  value: '',
  rows: 2,
  onChange: _noop,
  onBlur: _noop,
  helperText: '',
  errorMsg: '',
  dynamicHeight: false,
  autoFocus: false,
};

export default Textarea;
