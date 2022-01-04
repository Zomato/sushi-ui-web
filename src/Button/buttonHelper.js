import { button as btnColor } from '../tokens/colors';
import { button as btnSize } from '../tokens/sizes';
import spacing from '../tokens/spacing';
import * as colors from '../tokens/color/PrimaryColors';

import { whiteShades } from '../tokens/color/white';
import misc from '../tokens/misc';
import _get from 'lodash-es/get';
import { getRGBAFromHex } from '../helpers/commonHelper';
import { ripples, getRippleStyles } from '../Ripple';

const propsBtnColors = {
  ...colors,
  white: { ...whiteShades },
  coal: {
    z400: colors.black,
    z500: colors.black,
    z600: colors.grey.z900,
    z700: colors.grey.z900,
  },
};

const appearances = {
  default: {
    text: btnColor.default.text,
    icon: btnColor.default.icon,
    background: btnColor.default.background,
    border: btnColor.default.border,
    hoverBackground: btnColor.default.backgroundHover,
    hoverBorder: btnColor.default.borderHover,
    focusBackground: btnColor.default.backgroundFocus,
    focusBorder: btnColor.default.borderFocus,
    activeBackground: btnColor.default.backgroundActive,
    activeBorder: btnColor.default.borderActive,
  },
  location: {
    text: btnColor.default.text,
    icon: btnColor.default.icon,
    background: btnColor.default.background,
    border: btnColor.default.border,
    hoverBackground: btnColor.default.backgroundHover,
    hoverBorder: btnColor.default.borderHover,
    focusBackground: btnColor.default.backgroundFocus,
    focusBorder: btnColor.default.borderFocus,
    activeBackground: btnColor.default.backgroundActive,
    activeBorder: btnColor.default.borderActive,
  },
};

const buttonSizes = {
  large: {
    lineHeight: btnSize.large.height,
    minWidth: '35rem',
    padding: spacing.medium,
    fontSize: '1.8rem',
    iconSize: 14,
    activeShadow: '0 0.4rem 0.6rem',
  },
  default: {
    lineHeight: btnSize.default.height,
    minWidth: '15rem',
    padding: spacing.small,
    fontSize: '1.6rem',
    iconSize: 12,
    activeShadow: '0 0.4rem 0.6rem',
  },
  compressed: {
    lineHeight: btnSize.compressed.height,
    minWidth: 'auto',
    padding: spacing.small,
    fontSize: '1.4rem',
    iconSize: 10,
    activeShadow: '0 0.3rem 0.6rem',
  },
  small: {
    lineHeight: btnSize.small.height,
    minWidth: 'auto',
    padding: spacing.small,
    fontSize: '1.4rem',
    iconSize: 10,
    activeShadow: '0 0.3rem 0.6rem',
  },
  largeIcon: {
    lineHeight: btnSize.large.height,
    minWidth: 'auto',
    padding: spacing.medium,
    fontSize: '1.6rem',
    iconSize: 20,
    activeShadow: 'none',
  },
};

const isLinkButton = (props) =>
  props.appearance === misc.button.appearances.link;
const isOutlineButton = (props) =>
  props.appearance === misc.button.appearances.outline;

const getBtnSpacing = (props) =>
  props.text ? (isLinkButton(props) ? spacing.xxsmall : spacing.xsmall) : 0;

const isLocateMeButton = (props) =>
  props.appearance === misc.button.appearances.locateMe;

const getBtnAttributes = (props) => {
  const isOutline = isOutlineButton(props);
  const isLink = isLinkButton(props);
  const isLocateMe = isLocateMeButton(props);
  const disabledColor = propsBtnColors[misc.button.disabledColor];
  const activeColor = _get(propsBtnColors, `${props.btnColor}`, disabledColor);
  const propsBtnColor = props.disabled ? disabledColor : activeColor;

  // Get the styles for the button's selected appearance.
  const appearanceStyles = appearances.default;

  // Get the styles for the button's selected size.
  const sizeStyles = isLink
    ? buttonSizes.compressed
    : buttonSizes[props.size] || buttonSizes.default;

  // Merge the two style hashes together to create the base styles.
  const styles = {
    ...appearanceStyles,
    ...sizeStyles,
  };
  styles.borderWidth = '0.1rem';
  //define button colors for  button according to outline
  if (isOutline) {
    //outline button with propsBtnColor
    styles.background = 'transparent';
    styles.text = propsBtnColor.z500;
    styles.hoverText = propsBtnColor.z700; // styles.background;
    styles.border = propsBtnColor.z400;
    styles.hoverBackground = getRGBAFromHex(propsBtnColor.z500, 0.04);
    styles.hoverBorder = propsBtnColor.z600;

    styles.focusBorder = propsBtnColor.z600;
    styles.activeBackground = getRGBAFromHex(propsBtnColor.z500, 0.16);
    styles.activeBorder = propsBtnColor.z600;
    styles.customBoxShadow = 'unset';
  } else if (isLink) {
    styles.border = 'transparent';
    styles.background = 'transparent';
    styles.text = propsBtnColor.z500;
    styles.hoverText = propsBtnColor.z600;
    styles.hoverBackground = 'transparent';
    styles.focusBackground = 'transparent';
    styles.activeBackground = 'transparent';
    styles.customBoxShadow = 'none';
    styles.borderWidth = 0;
  } else if (isLocateMe) {
    styles.border = 'transparent';
    styles.background = 'transparent';
    styles.text = propsBtnColors.black;
    styles.hoverText = propsBtnColors.black;
    styles.hoverBackground = 'transparent';
    styles.focusBackground = 'transparent';
    styles.activeBackground = 'transparent';
    styles.customBoxShadow = 'none';
    styles.borderWidth = 0;
  } else if (props.btnColor === 'chalk') {
    styles.border = 'transparent';
    styles.background = colors.grey.z50;
    styles.text = propsBtnColors.black;
    styles.hoverText = propsBtnColors.black;
    styles.hoverBackground = colors.grey.z100;
    styles.focusBackground = colors.grey.z100;
    styles.activeBackground = colors.grey.z100;
    styles.customBoxShadow = `${styles.activeShadow} rgba(0,0,0,.08)`;
    styles.borderWidth = 0;
  } else {
    const shadow = 'rgba(0,0,0,0.5)';
    styles.background = propsBtnColor.z500;
    styles.border = propsBtnColor.z500;
    styles.hoverBackground = propsBtnColor.z600; //hoverColor;
    styles.focusBackground = shadow;
    styles.activeBackground = propsBtnColor.z600;
    styles.customBoxShadow = `${styles.activeShadow} rgba(0,0,0,.16)`; //"inset 0 0 0.8rem " + shadow;
    styles.borderWidth = 0;
  }

  // If the loading state is set, override some of the styles.
  if (!props.disabled && props.loading) {
    styles.hoverText = isOutline ? styles.text : styles.hoverText;
  }

  // If the button contains only an icon and no text, override some of the styles.
  if (props.icon && !props.text) {
    styles.minWidth = '3.6rem';
  }

  if (props.fontSize) {
    styles.fontSize = props.fontSize;

    styles.iconSize =
      parseFloat(props.fontSize) !== parseInt(props.fontSize)
        ? parseFloat(props.fontSize) * 10
        : parseFloat(props.fontSize);
  }

  return styles;
};

const getAttr = (key) => (props) => getBtnAttributes(props)[key];

const getButtonRippleStyles = ({ preventRipple, appearance, btnColor }) => {
  if (preventRipple) {
    return '';
  }
  const outlineRippleColor = _get(propsBtnColors, `${btnColor}.z500`, '');
  const { appearances } = misc.button;
  const ripplesByAppearance = {
    [appearances.link]: ripples.dark,
    [appearances.locateMe]: ripples.dark,
    [appearances.outline]: outlineRippleColor
      ? getRippleStyles(outlineRippleColor)
      : ripples.dark,
    [appearances.solid]: ripples.light,
  };
  return ripplesByAppearance[appearance] || '';
};

export { getBtnAttributes, getBtnSpacing, getAttr, getButtonRippleStyles };
