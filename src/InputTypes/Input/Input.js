// libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cloneChildren } from '../../helpers/commonHelper';
import _noop from 'lodash-es/noop';

import { svgStyle } from '../../helpers/commonHelper';

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
// import { green } from "../../tokens/color";
import teal from '../../tokens/color/teal';

const RightIcon = styled.div`
  ${svgStyle};
  position: absolute;
  top: 15px;
  right: 10px;
`;
const LeftIcon = styled.div`
  ${svgStyle};
  position: absolute;
  top: 15px;
  left: 10px;
`;
const LeftLoader = styled.div`
  position: absolute;
  top: 18px;
  left: 10px;
  z-index: 1;
`;
const RightLoader = styled.div`
  position: absolute;
  top: 18px;
  right: 10px;
  z-index: 1;
`;

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  console.log(props);
  const [focused, toggleFocus] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const onFocusToggle = (_) => {
    if (!focused) props.onFocus();
    toggleFocus(!focused);
  };

  const state = getState(props, focused);
  const helperTxt = getHelperText(props.helperText, props.errorMsg);
  // eslint-disable-next-line no-unused-vars
  const { loading, onChange, ...wrapperProps } = props; // fix: loading property should not be passed to native elemennts
  const inputProps = {
    name: props.name,
    min: props.min,
    max: props.max,
    type: props.type,
    width: props.innerWidth,
    icon: props.icon,
    disabled: props.disabled,
    borderColor: props.borderColor,
    autoFocus: props.autoFocus,
    value: props.value,
    leftIcon: props.leftIcon,
    ref,
    fullWidth: props.fullWidth,
    onChange: onValueChange(props), // fix: passing an onChange to input with a value property
  };

  return (
    <Input.Wrapper
      {...wrapperProps}
      fullWidth={props.fullWidth}
      onFocus={onFocusToggle}
      onBlur={onBlurred(props, onFocusToggle)}
    >
      <Input.ElementWrapper width={props.innerWidth}>
        {props.leftIcon && (
          <LeftIcon>
            {cloneChildren(props.leftIcon, {
              size: 17,
              color: props.leftIconColor,
            })}
          </LeftIcon>
        )}
        {loading && props.loader && props.loaderAlign === 'left' && (
          <LeftLoader>
            <props.loader {...props.loaderProps} />
          </LeftLoader>
        )}
        <Input.Element
          {...inputProps}
          state={state}
          autoComplete={props.autocomplete ? 'on' : 'nope'}
          leftLoader={props.loader && props.loaderAlign === 'left'}
          rightLoader={props.loader && props.loaderAlign === 'right'}
        />
        {loading && props.loader && props.loaderAlign === 'right' && (
          <RightLoader>
            <props.loader {...props.loaderProps} />
          </RightLoader>
        )}
        {props.icon && (
          <RightIcon>
            {cloneChildren(props.icon, {
              size: 17,
              color: props.iconColor,
            })}
          </RightIcon>
        )}
      </Input.ElementWrapper>
      {props.disabled ? (
        <Input.LabelDisabled showLbl state={state}>
          {props.label}
        </Input.LabelDisabled>
      ) : (
        <Input.Label
          showLbl={focused || !!props.value}
          hideLabel={props.hideLabel}
          value={props.value}
          state={state}
          leftIcon={props.leftIcon}
          leftLoader={props.loader && props.loaderAlign === 'left'}
        >
          {props.label}
        </Input.Label>
      )}
      {props.showHelperText && (
        <Input.Helper state={state}>{helperTxt}</Input.Helper>
      )}
    </Input.Wrapper>
  );
});

Input.ElementWrapper = styled.section`
  position: relative;
  margin: 0;
  width: ${getAttributes('width')};
  height: 4.8rem;
`;

Input.Helper = styled.div`
  height: 13px;
  color: ${getAttributes('helperColor')};
  visibility: ${getAttributes('visibility')};
  font-size: 11px;
  line-height: 13px;
  margin-top: 2px;
`;

Input.Wrapper = styled.section`
  position: relative;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;

Input.Label = styled.label`
  position: absolute;
  pointer-events: none;
  transition: 0.2s ease all; // TODO transition
  color: ${getAttributes('placeholder')};
  top: ${getLabelAttr('top')};
  left: ${getLabelAttr('left')};
  font-size: ${getLabelAttr('fontSize')};
  background: ${getLabelAttr('background')};
  padding: ${getLabelAttr('padding')};
  display: ${getLabelAttr('display')};
  max-width: 90%;
  max-height: 2.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

Input.LabelDisabled = styled.label`
  position: absolute;
  pointer-events: none;
  color: ${getAttributes('placeholder')};
  top: ${getLabelAttr('top')};
  left: ${getLabelAttr('left')};
  font-size: ${getLabelAttr('fontSize')};
  background: ${getLabelAttr('labelBackground')};
  padding: ${getLabelAttr('padding')};
  max-width: 90%;
  max-height: 2.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

Input.Element = styled.input`
  padding: ${getAttributes('padding')};
  height: 4.8rem;
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
  color: ${getAttributes('text')};
  /* &:invalid {
    border-color: red;
  }
  &:valid:focus {
    border-color: green;
  }
  &:invalid:focus {
    /* border-color:  */
  /* border-width: 0.2rem;
    & + label {
      opacity: 1;
    }
  } */
`;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.string,
  innerWidth: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  icon: PropTypes.node,
  leftIcon: PropTypes.string,
  leftIconColor: PropTypes.string,
  iconColor: PropTypes.string,
  autocomplete: PropTypes.bool,
  fullWidth: PropTypes.bool,
  borderColor: PropTypes.string,
  autoFocus: PropTypes.bool,
  errorMsg: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  showHelperText: PropTypes.bool,
  loading: PropTypes.bool,
  loader: PropTypes.node,
  loaderProps: PropTypes.shape({
    size: PropTypes.string,
    color: PropTypes.string,
  }),
  loaderAlign: PropTypes.string,
};

Input.defaultProps = {
  color: 'white',
  hideLabel: false,
  disabled: false,
  value: '',
  type: 'text',
  onChange: _noop,
  onBlur: _noop,
  onFocus: _noop,
  helperText: '',
  iconColor: '#B5B5B5',
  leftIconColor: '#B5B5B5',
  autocomplete: true,
  fullWidth: false,
  borderColor: teal.z500,
  autoFocus: false,
  errorMsg: '',
  showHelperText: true,
  loading: false,
  loaderProps: {
    color: 'rgb(0,0,0)',
    size: 'small',
  },
  loaderAlign: 'right',
};

export default Input;
