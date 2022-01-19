import red from './color/red';

const misc = {
  radius: '0.6rem',
  lineHeight: 1.6,
  animationDuration: '0.25s',
  shortAnimDuration: '0.15s',
  navToggleDurationInMS: 300,
  animation: {
    linear: 'linear',
    easeingCurve: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeInBackCurve: 'cubic-bezier(0.6, -0.28, 0.74, 0.05)',
    easeIn: 'ease-in',
  },
  // genericOutline: "rgba(238, 85, 106, 0.247) auto 0.5rem",
  genericOutline: 'none',
  focusBoxShadow: {
    red: `${red.z_red} 0px 0px 1px 1px !important`,
    white: `rgb(255,255,255) 0px 0px 1px 1px !important`,
    inset_red: `inset ${red.z_red} 0px 0px 1px 1px !important`,
  },
  inputs: {
    padding: '12px',
    lineHeight: '21px',
  },
  button: {
    defaultColor: 'green',
    disabledColor: 'grey',
    appearances: {
      solid: 'solid',
      outline: 'outline',
      link: 'link',
      locateMe: 'locateMe',
    },
  },
  dropdown: {
    defaultWidth: '32rem',
  },
};

export default misc;
