import green from './color/green';
import grey from './color/grey';
import red from './color/red';
import white from './color/white';
import black from './color/black';
import teal from './color/teal';

const base = {
  white,
  black,
  default: '#333',
  gray: '#B5B5B5',
  grayDarkest: '#676767',
  grayDark: '#636363',
  grayMedium: '#A8A8A8',
  grayLight: '#D9D9D9',
  grayLightest: '#F1F1F1',
  blueDarker: '#097093',
  blue: '#0a84ae',
  blueLight: '#44c7f4',
  blueLightest: '#f5f7f9',
  orange: '#eb5424',
  orangeLighter: '#ff784d',
  orangeLightest: '#ffb299',
  orangeDark: '#FF3E00',
  greenDarker: '#3F6910',
  green: green.z500,
  greenDark: green.z600,
  greenLight: '',
  red: '#E23744',
  redDarker: '#801F00',
  yellow: '#786600',
};

const text = {
  default: '#212121',
  inputs: '#555',
  secondary: '#757575',
  subtle: '#BDBDBD',
  error: '#FF0000',
  green: '#0DA314',
};

const form = {
  title: '#000',
  divider: 'rgba(151,151,151,0.29)',
  background: '#f9f9f9',
};

const input = {
  default: {
    background: white,
    borderColor: grey.z300,
    icon: grey.z400,
    text: black,
    placeholder: grey.z400,
    borderWidth: '0.1rem solid',
    helperColor: grey.z600,
    visibility: 'none',
  },
  focused: {
    background: white,
    borderColor: teal.z500,
    icon: grey.z400,
    text: black,
    placeholder: teal.z500,
    borderWidth: '0.15rem solid',
    helperColor: teal.z600,
    visibility: 'none',
  },
  error: {
    background: white,
    borderColor: red.z600,
    icon: grey.z400,
    text: black,
    placeholder: grey.z400,
    borderWidth: '0.15rem solid',
    helperColor: red.z600,
    visibility: 'visible',
  },
  hideLabel: {
    background: white,
    borderColor: teal.z500,
    icon: grey.z400,
    text: black,
    placeholder: grey.z400,
    borderWidth: '0.15rem solid',
    helperColor: grey.z600,
    visibility: 'none',
  },
  error_hideLabel: {
    background: white,
    borderColor: red.z600,
    icon: grey.z400,
    text: black,
    placeholder: grey.z400,
    borderWidth: '0.15rem solid',
    helperColor: red.z600,
    visibility: 'visible',
  },
  error_focused: {
    background: white,
    borderColor: red.z600,
    icon: grey.z400,
    text: black,
    placeholder: red.z600,
    borderWidth: '0.15rem solid',
    helperColor: red.z600,
    visibility: 'visible',
  },
  disabled: {
    background: white,
    borderColor: grey.z300,
    icon: grey.z400,
    text: grey.z400,
    placeholder: grey.z400,
    borderWidth: '0.1rem solid',
    helperColor: grey.z600,
    visibility: 'none',
  },
};

const link = {
  default: red.z500,
  defaultHover: red.z600,
  defaultActive: red.z600,
  defaultFocus: red.z600,
  sidebar: green.z600,
  sidebarHover: green.z600,
  sidebarFocus: green.z600,
  defaultBGColor: white,
};

const tooltip = {
  background: '#1A1A1A',
  text: '#FFF',
};

const tabs = {
  default: '#212121',
  defaultHover: '#0a84ae',
};

const button = {
  default: {
    background: green.z500,
    backgroundHover: green.z600,
    backgroundFocus: green.z600,
    backgroundActive: green.z600,
    text: white,
    icon: 'default',
    border: green.z500,
    borderHover: green.z600,
    borderFocus: green.z600,
    borderActive: green.z600,
  },
  outline: {
    background: '#FFF',
    backgroundHover: '#FAFAFA',
    backgroundFocus: '#FAFAFA',
    backgroundActive: '#FAFAFA',
    text: green.z500,
    hoverText: '#3F6910',
    icon: 'white',
    border: green.z500,
    borderHover: '#3F6910',
    borderFocus: '#3F6910',
    borderActive: '#3F6910',
  },
  disabled: {
    background: grey.z500,
    backgroundHover: grey.z500,
    backgroundFocus: grey.z500,
    backgroundActive: grey.z500,
    text: white,
    icon: 'white',
    border: grey.z500,
    borderHover: grey.z500,
    borderFocus: grey.z500,
    borderActive: grey.z500,
  },
  red: {
    background: red.z500,
    backgroundHover: red.z600,
    backgroundFocus: red.z600,
    backgroundActive: red.z600,
    text: white,
    icon: white,
    border: red.z500,
    borderHover: red.z600,
    borderFocus: red.z600,
    borderActive: red.z600,
  },
  success: {
    background: '#4CD964',
    backgroundHover: '#4CD964',
    backgroundFocus: '#4CD964',
    text: '#FAFAFA',
    icon: 'white',
    border: '#4CD964',
    borderHover: '#4CD964',
    borderFocus: '#4CD964',
    borderActive: '#4CD964',
  },
  link: {
    text: '#0a84ae',
    icon: 'blue',
    hover: '#0a84ae',
    focus: '#0a84ae',
  },
};

const icon = {
  default: '#333',
  light: '#A8A8A8',
  sidebar: 'default',
  sidebarHover: 'orangeDark',
  sidebarFocus: 'orangeDark',
};

const list = {
  backgroundHover: '#FAFAFA',
  borderColor: '#DDD',
};

const alert = {
  default: {
    background: '#F0F0F0',
    text: '#333',
  },
  information: {
    background: '#DBF4FC',
    text: '#097093',
  },
  success: {
    background: '#E5F8D1',
    text: '#3F6910',
  },
  warning: {
    background: '#FFF6CB',
    text: '#786600',
  },
  danger: {
    background: '#FFD8CC',
    text: '#801F00',
  },
};

const radioLabel = {
  default: ({ selectedColor, textColor }) => ({
    borderColor: grey.z500,
    hoverBorderColor: selectedColor || teal.z500,
    selectedBgColor: selectedColor || teal.z500,
    textColor: textColor || black,
  }),
  checked: ({ selectedColor, textColor }) => ({
    borderColor: selectedColor || teal.z500,
    hoverBorderColor: selectedColor || teal.z500,
    selectedBgColor: selectedColor || teal.z500,
    textColor: textColor || black,
  }),
  disabled: {
    borderColor: grey.z300,
    hoverBorderColor: grey.z300,
    selectedBgColor: grey.z300,
    textColor: black,
  },
};

const checkboxSelected = {
  disabled_solid: () => ({
    borderColor: grey.z300,
    background: grey.z300,
    tickColor: white,
  }),
  disabled: () => ({
    borderColor: grey.z300,
    tickColor: grey.z300,
    background: white,
  }),
  solid: (color) => ({
    borderColor: color || teal.z500,
    background: color || teal.z500,
    tickColor: white,
  }),
  default: (color) => ({
    borderColor: color || teal.z500,
    tickColor: color || teal.z500,
    background: white,
  }),
};

const checkbox = {
  disabled: {
    borderColor: grey.z300,
    hoverBorderColor: grey.z300,
  },
  default: (color) => ({
    borderColor: grey.z500,
    hoverBorderColor: color || teal.z500,
  }),
};

const imgUploaderDefault = {
  tagColor: grey.z500,
  borderColor: grey.z300,
  background: white,
};

const status = {
  default: '#7D7D7D',
  information: '#3BC0F2',
  success: '#73CD1F',
  warning: '#F49C20',
  danger: '#D14B49',
};

const tag = {
  background: '#DBF4FD',
  border: '#3BC0F2',
  text: '#3BC0F2',
};

export {
  base,
  text,
  form,
  input,
  link,
  tooltip,
  tabs,
  button,
  checkbox,
  checkboxSelected,
  imgUploaderDefault,
  icon,
  list,
  alert,
  radioLabel,
  status,
  tag,
};
