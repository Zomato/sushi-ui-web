const unit = 4;
const spacing = {
  unit,
  xxsmall: unit * 0.1 + 'rem', //4px
  xsmall: unit * 0.2 + 'rem', //8px
  small: unit * 0.4 + 'rem', //16px
  medium: unit * 0.6 + 'rem', //24px
  large: unit * 0.8 + 'rem', //32px
  xlarge: unit * 1.2 + 'rem', //48px
};

const zSpacing = {
  z0: 0,
  z1: unit * 0.1 + 'rem', //4px
  z2: unit * 0.2 + 'rem', //8px
  z3: unit * 0.4 + 'rem', //16px
  z4: unit * 0.6 + 'rem', //24px
  z5: unit * 0.8 + 'rem', //32px
  z6: unit + 'rem', //40px
};

export default spacing;
export { zSpacing };
