/* eslint-disable react/prop-types */
// libraries
import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash-es/noop';
import styled from 'styled-components';
import { cloneChildren } from '../helpers/commonHelper';

// helpers
import {
  getAttr,
  getBtnSpacing,
  getBtnAttributes,
  getButtonRippleStyles,
} from './buttonHelper';
import misc from '../tokens/misc';
import Spinner from '../Spinner/Spinner';
import SpinnerCircular from '../Spinner/SpinnerCircular';
import { fontWeights } from '../tokens/typography';
import { onKeySelect, filterChildProps } from '../helpers/commonHelper';

const GetButtonContent = (props) => {
  let content = [];
  const { onClick, disabled, loading, ...rest } = props;

  const handleClick = (event) => {
    event.stopPropagation();
    onClick(event);
  };

  // Button text
  // eslint-disable-next-line react/prop-types
  if (props.text)
    content.push(<Button.Text key='text'>{props.text}</Button.Text>);
  const normalSpinner = [
    <Spinner
      inverse={props.appearance !== misc.button.appearances.outline}
      color={getBtnAttributes(props).hoverText || getBtnAttributes(props).text}
      key='loading'
      width={getBtnAttributes(props).iconSize}
    />,
  ];

  const circularSpinner = [
    <SpinnerCircular
      inverse={props.appearance !== misc.button.appearances.outline}
      color={getBtnAttributes(props).hoverText || getBtnAttributes(props).text}
      key='loading'
      size='small'
    />,
  ];
  if (!props.disabled && loading) {
    content = !(props.icon && !props.children)
      ? normalSpinner
      : circularSpinner;
  }

  if (props.icon && !loading) {
    const Icon = styled(({ component, ...props }) =>
      cloneChildren(component, props),
    )`
      transition: transform 0.4s;
      ${Button.Element}:hover & {
        fill: ${(props) => props.hoverColor};
      }
    `;
    const iconEle = (
      <Icon
        component={props.icon}
        color={getBtnAttributes(props).text}
        size={getBtnAttributes(props).iconSize}
        hoverColor={getBtnAttributes(props).hoverText}
        key='icon'
      />
    );
    props.iconAlign == 'right'
      ? content.push(iconEle)
      : content.unshift(iconEle);
  }

  /** className is passed dynamically by styled components
   * so if we do {...props}, it will apply parent styles to the child as well.
   * it will break the styles of components
   * */
  /**
   * 'loading' property should not be passed down to native html element
   * unless it's an image element.
   */
  const childProps = filterChildProps(props, ['className', 'loading']);

  return (
    <Button.Element
      {...rest}
      disabled={disabled}
      role='button'
      tabIndex='0'
      aria-disabled={disabled}
      key='button-element'
      isLoading={loading}
    >
      <Button.ContentWrapper
        {...childProps}
        tabIndex={-1}
        onClick={handleClick}
        onKeyDown={onKeySelect(handleClick)}
      >
        {content}
      </Button.ContentWrapper>
    </Button.Element>
  );
};

const Button = ({ children, ...props }) => (
  <GetButtonContent {...props} text={children} />
);

Button.Element = styled.button`
  min-width: ${getAttr('minWidth')};
  min-height: ${getAttr('lineHeight')};
  display: inline-flex;
  align-items: stretch;
  border-radius: ${misc.radius};
  background: transparent;
  padding: 0;
  border: none;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) =>
    props.disabled || props.isLoading || props.success ? 'none' : null};
`;

Button.ContentWrapper = styled.span`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-width: ${getAttr('minWidth')};
  min-height: ${getAttr('lineHeight')};
  line-height: ${getAttr('lineHeight')};
  /* Safari button margins reset */
  margin-top: 0;
  margin-left: 0;
  outline: none !important;
  white-space: nowrap;
  font-size: ${getAttr('fontSize')};
  font-weight: ${fontWeights.light};
  background: ${getAttr('background')};
  border-color: ${getAttr('border')};
  border-width: ${getAttr('borderWidth')};
  border-style: solid;
  border-radius: ${misc.radius};
  color: ${getAttr('text')};
  padding: 0 ${getAttr('padding')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-clip: border-box;
  transition: transform ${misc.animationDuration},
    opacity ${misc.animationDuration}, box-shadow ${misc.animationDuration} ease;
  > *:not(:last-child):not(:only-child) {
    margin-right: ${getBtnSpacing};
    line-height: 1;
  }
  ${Button.Element}:focus & {
    color: ${getAttr('hoverText') || getAttr('text')};
    background: ${getAttr('hoverBackground')};
    border-color: ${getAttr('hoverBorder')};
    box-shadow: 0 0 0 4px #fff, 0 0 0 5px #717171,
      0 0 0 6px rgba(255, 255, 255, 0.5);
  }
  /* Removing the focus ring styles specifically for Firefox */
  &:not(:-moz-focusring):focus {
    box-shadow: none;
  }
  ${Button.Element}:active & {
    background: ${getAttr('activeBackground')};
    border-color: ${getAttr('activeBorder')};
    outline: none;
    box-shadow: ${(props) => getBtnAttributes(props).customBoxShadow};
  }

  @media (hover: hover) {
    ${
      '' /* css for non touch devices, (hover enabled screens to be precised) goes here  */
    }
    ${Button.Element}:hover, ${Button.Element}:focus {
      color: ${getAttr('hoverText') || getAttr('text')};
      background: ${getAttr('hoverBackground')};
      border-color: ${getAttr('hoverBorder')};
    }

    &:hover {
      i {
        transform: ${({ iconAlign }) =>
          `translate(${iconAlign === 'left' ? -4 : 8}px, 0)`};
      }
      color: ${getAttr('hoverText') || getAttr('text')};
      background: ${getAttr('hoverBackground')};
      border-color: ${getAttr('hoverBorder')};
    }
  }
  @media (hover: none) {
    ${
      '' /* css for touch devices, (non-hover screens to be precised) goes here  */
    }
    ${Button.Element}:focus & {
      outline: none;
      box-shadow: none !important;
    }
  }
  ${getButtonRippleStyles}
`;

Button.Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-size: inherit;
  transition: transform 0.4s;
  *:last-child:not(:only-child) {
    margin-top: 0.1rem;
  }
`;

Button.LinkElement = styled(Button.Element.withComponent('a'))`
  text-decoration: none;
`;

Button.propTypes = {
  /** Add a callback on click of button component */
  onClick: PropTypes.func,
  title: PropTypes.string,
  /** Condidtionally disable / Enable a Button */
  disabled: PropTypes.bool,
  /** color of button, should be one of primary colors */
  btnColor: PropTypes.oneOf([
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'lime',
    'coal',
    'chalk',
  ]),
  /** Whether button should appears to be solid or White button with given color boundary and Text */
  appearance: PropTypes.oneOf(['outline', 'solid', 'link', 'location']),
  /** Switch Loading state on/off */
  loading: PropTypes.bool,
  /** Size of button */
  size: PropTypes.oneOf([
    'large',
    'default',
    'compressed',
    'small',
    'largeIcon',
  ]),
  /** Icon which goes on button along with Text */
  icon: PropTypes.node,
  /** Position of icon, before or after text */
  iconAlign: PropTypes.oneOf(['left', 'right']),
  preventRipple: PropTypes.bool,
};

Button.defaultProps = {
  onClick: _noop,
  disabled: false,
  loading: false,
  appearance: 'solid',
  size: 'default',
  iconAlign: 'left',
  btnColor: 'red',
  preventRipple: false,
};

export default React.memo(Button);
