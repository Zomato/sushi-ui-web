import React from 'react';
import styled from 'styled-components';
import black from '../tokens/color/black';
import _noop from 'lodash-es/noop';
import { svgStyle, iconStyle } from '../helpers/commonHelper';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  ${svgStyle}
`;

const Icon = (props) => {
  const {
    color,
    baseColor,
    size,
    showPointer,
    onClick,
    className,
    children,
    iconName,
    percentage,
    uniqueId,
  } = props;

  const titleId = `icon-svg-title-${iconName}`;
  const descId = `icon-svg-desc-${iconName}`;

  return (
    <Icon.Element
      showPointer={showPointer}
      onClick={onClick}
      className={className}
      {...props}
    >
      <SVG
        xmlns='http://www.w3.org/2000/svg'
        fill={color}
        width={size}
        height={size}
        viewBox='0 0 20 20' // don't change this
        aria-labelledby={`${titleId} ${descId}`}
        role='img'
      >
        {!!percentage && (
          <linearGradient id={uniqueId} x1='0' x2='100%' y1='0' y2='0'>
            <stop offset='0' stopColor={color} />
            <stop offset={`${percentage}%`} stopColor={color} />
            {percentage < 100 && (
              <stop offset={`${percentage + 1}%`} stopColor={baseColor} />
            )}
            {percentage < 100 && <stop offset='1' stopColor={baseColor} />}
          </linearGradient>
        )}
        {children}
      </SVG>
    </Icon.Element>
  );
};

Icon.Element = styled.i`
  ${iconStyle}
`;

Icon.defaultProps = {
  color: black,
  baseColor: 'transparent',
  size: 20,
  showPointer: false,
  onClick: _noop,
  className: '',
  children: null,
  iconName: '',
  percentage: 0,
};

Icon.propTypes = {
  /** The color prop helps user to set a custom color of the icon. */
  color: PropTypes.string,
  /** Size prop overrides the default size of the icon. It helps user to set a custom size of the icon. */
  size: PropTypes.number,
  /** Callback function to be triggered when user clicks on an icon. */
  onClick: PropTypes.func,
  /**  Shows cursor as pointer on hover if set to true. By default it does not show pointer; */
  showPointer: PropTypes.bool,
  className: PropTypes.string,
  iconName: PropTypes.string,
  children: PropTypes.node,
  uniqueId: PropTypes.string.isRequired,
  baseColor: PropTypes.string,
  percentage: PropTypes.number,
};

export default Icon;
