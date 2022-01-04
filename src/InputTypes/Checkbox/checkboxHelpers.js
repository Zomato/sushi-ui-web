import { checkbox, checkboxSelected } from '../../tokens/colors';

const getClickedAttr = (cbType, color) => checkboxSelected[cbType](color);

const getAttr = (disabled, color) =>
  disabled ? checkbox.disabled : checkbox.default(color);

const getClickedAttributes =
  (key) =>
  ({ cbType, color }) =>
    getClickedAttr(cbType, color)[key];

const getAttributes =
  (key) =>
  ({ disabled, color }) =>
    getAttr(disabled, color)[key];

const getType = (disabled, solid) => {
  const key = [];
  if (disabled) {
    key.push('disabled');
  }
  if (solid) {
    key.push('solid');
  }

  return key.length ? key.join('_') : 'default';
};

export { getAttributes, getClickedAttributes, getType };
