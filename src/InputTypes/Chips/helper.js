import { css } from 'styled-components';

// sushi
import grey from '../../tokens/color/grey';
import red from '../../tokens/color/red';
import teal from '../../tokens/color/teal';
import white from '../../tokens/color/white';

// constants
const FOCUS_PROPS_MAPPING = ['chipBg', 'chipFont', 'chipBorder', 'chipCross'];
const COLOR_PROPS_MAPPING = ['borderColor', 'color', 'labelFont'];

const moveLabelTop = css`
  font-size: 1.2rem;
  margin: 0;
  top: -1rem;
  left: 1.2rem;
  padding: 0 0.5rem;
`;

const getFocusPropValue = (theme) => (acc, key) => {
  if (theme.focused) return { ...acc, [key]: theme.activeColors[key] };

  return { ...acc, [key]: theme.inertColors[key] };
};

const getColorPropValue = (theme) => (acc, key) => {
  let k = key;
  if (key === 'borderColor') k = 'border';
  else if (key === 'color') k = 'font';

  if (theme.error) return { ...acc, [key]: red.z500 };
  else if (theme.focused) return { ...acc, [key]: theme.activeColors[k] };
  else return { ...acc, [key]: theme.inertColors[k] };
};

const getPropValue = (theme) => {
  const shouldMoveLabel =
    theme.error || theme.focused || theme.input || theme.loading;

  const modifiedProps = {
    ...FOCUS_PROPS_MAPPING.reduce(getFocusPropValue(theme), {}),
    ...COLOR_PROPS_MAPPING.reduce(getColorPropValue(theme), {}),

    moveLabel: shouldMoveLabel ? moveLabelTop : '',
    helperTxtColor: theme.error ? red.z500 : grey.z600,

    loaderAlign: theme.loaderProps.align,
    bgColor: theme.bgColor,
  };
  return {
    ...theme,
    ...modifiedProps,
  };
};

/********* exported *********/
export const getValue =
  (key) =>
  ({ theme }) =>
    getPropValue(theme)[key];

export const getTextWidth = (text, font) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font || getComputedStyle(document.body).font;
  return context.measureText(text).width;
};

export const getActiveColors = (newValues) => ({
  border: teal.z400,
  font: grey.z800,
  labelFont: teal.z400,
  chipBg: red.z500,
  chipFont: white,
  chipCross: white,
  chipBorder: 'rgba(0,0,0,0)',
  ...newValues,
});

export const getInertColors = (newValues) => ({
  border: grey.z300,
  font: grey.z400,
  labelFont: grey.z400,
  chipBg: red.z500,
  chipFont: white,
  chipCross: white,
  chipBorder: 'rgba(0,0,0,0)',
  ...newValues,
});

export const getLoaderProps = (newValues) => ({
  color: grey.z200,
  size: 'small',
  align: 'center',
  ...newValues,
});
