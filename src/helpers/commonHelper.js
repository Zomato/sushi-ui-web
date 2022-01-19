import React from 'react';

const onKeySelect = (func) => (e) => {
  if (e.key === 'Enter' || e.keyCode === 32) {
    func(e);
  }
};

const cloneChildren = (children, newProps) => {
  if (Array.isArray(children)) {
    return children.map((ch) => (ch ? React.cloneElement(ch, newProps) : null));
  }
  return children ? React.cloneElement(children, newProps) : null;
};

const keyCodes = {
  13: 'ENTER',
  37: 'LEFT',
  38: 'UP',
  39: 'RIGHT',
  40: 'DOWN',
};

const onKeyChoose = (func) => (e) => {
  const navKey = keyCodes[e.keyCode] || false;
  if (navKey) func(e, navKey);
};

const hexToRgb = (hex) => {
  if (!hex) {
    return null;
  }
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgbObj = {
    r: result && parseInt(result[1], 16),
    g: result && parseInt(result[2], 16),
    b: result && parseInt(result[3], 16),
  };
  return result ? rgbObj : null;
};

const getRGBAFromHex = (hex, alpha) => {
  const rgbObj = hexToRgb(hex);
  return hex ? `rgba(${rgbObj.r},${rgbObj.g},${rgbObj.b},${alpha})` : null;
};

const filterChildProps = (props, excludeKeys) => {
  return Object.keys(props)
    .filter((key) => {
      if (Array.isArray(excludeKeys)) {
        return !excludeKeys.includes(key);
      }

      return excludeKeys !== key;
    })
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});
};

export {
  onKeySelect,
  filterChildProps,
  getRGBAFromHex,
  cloneChildren,
  hexToRgb,
  onKeyChoose,
};
