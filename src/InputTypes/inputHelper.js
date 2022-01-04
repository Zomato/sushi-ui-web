import { input } from '../tokens/colors';
import {
  input as inputSize,
  inputPhFocused,
  inputPhDefault,
  inputPadding,
  inputPhLeftIcon,
  inputNoLabel,
} from '../tokens/sizes';

import _get from 'lodash-es/get';

const getPadding = (top, right, bottom, left) =>
  `${top}rem ${right}rem ${bottom}rem ${left}rem`;

const getInputAttributes = (props) => {
  // Get the styles for the button's selected size.
  const focusedState = [
    'focused',
    'error',
    'hideLabel',
    'error_focused',
    'error_hideLabel',
  ].includes(props.state);
  const colorStyle = input[props.state];

  if (props.borderColor) {
    if (['hideLabel', 'focused'].includes(props.state)) {
      colorStyle.borderColor = props.borderColor;
    }
    if (['focused'].includes(props.state)) {
      colorStyle.placeholder = props.borderColor;
    }
  }

  const { vPadding, hzPadding } = inputPadding;
  const pright = props.icon || props.rightLoader ? hzPadding + 2.3 : hzPadding;
  const pleft =
    props.leftIcon || props.leftLoader ? hzPadding + 2.3 : hzPadding;
  const focusedPadding = getPadding(
    vPadding - 0.05,
    pright - 0.05,
    vPadding - 0.05,
    pleft - 0.05,
  );
  const padding = focusedState
    ? focusedPadding
    : getPadding(vPadding, pright, vPadding, pleft);

  const width = props.fullWidth ? '100%' : props.width;

  return { ...colorStyle, ...inputSize, width, padding };
};

const getLabelAttributes = (props) => {
  if (props.state === 'disabled') {
    return {
      ...inputPhFocused,
      labelBackground: input.disabled.background,
    };
  }
  if ((props.state === 'hideLabel' || props.hideLabel) && props.value) {
    return {
      ...inputNoLabel,
    };
  }
  if (props.showLbl && props.hideLabel && props.leftIcon) {
    return {
      ...inputPhLeftIcon,
      background: input.default.background,
    };
  }
  if (props.showLbl && props.hideLabel) {
    return {
      ...inputPhDefault,
      background: input.default.background,
    };
  }

  if (props.showLbl) {
    return {
      ...inputPhFocused,
      background: input.default.background,
    };
  }

  if (props.leftIcon || props.leftLoader) {
    return {
      ...inputPhLeftIcon,
      background: input.default.background,
    };
  }

  return {
    ...inputPhDefault,
    background: input.default.background,
  };
};

const getHelperText = (helperText, errorMsg) => {
  if (errorMsg) {
    return errorMsg;
  }

  if (helperText) {
    return helperText;
  }

  return '';
};

const getAttributes = (key) => (props) => getInputAttributes(props)[key];

const getLabelAttr = (key) => (props) => getLabelAttributes(props)[key];

const getState = (props, focused) => {
  if (props.disabled) {
    return 'disabled';
  }

  if (props.errorMsg && focused && props.hideLabel) {
    return 'error_hideLabel';
  }

  if (focused && props.hideLabel) {
    return 'hideLabel';
  }

  if (props.errorMsg && (focused || props.value)) {
    return 'error_focused';
  }

  if (props.errorMsg) {
    return 'error';
  }

  if (focused) {
    return 'focused';
  }

  return 'default';
};

const onValueChange = (props) => (e) => {
  const newValue = _get(e, 'target.value');
  props.onChange(newValue, e);
};

const onBlurred = (props, onFocusToggle) => (e) => {
  const newValue = _get(e, 'target.value');
  onFocusToggle();
  props.onBlur(newValue, e);
};

export {
  getAttributes,
  getLabelAttr,
  getState,
  getHelperText,
  onValueChange,
  onBlurred,
};
