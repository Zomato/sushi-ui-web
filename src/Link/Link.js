import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { link as linkColor } from '../tokens/colors';
import spacing from '../tokens/spacing';
import red from '../tokens/color/red';
import { filterChildProps } from '../helpers/commonHelper';

const Link = (props) => {
  /** className is passed dynamically by styled components
   * so if we do {...props}, it will apply parent styles to the child as well.
   * it will break the styles of components
   * */

  const Icon = props.icon ? props.icon : null;
  const childProps = filterChildProps(props, ['className', 'onClick']);
  return (
    <Link.Ele href={props.linkTo} tabIndex={0} {...props}>
      {/* eslint-disable-next-line react/prop-types */}
      <Link.Wrapper tabIndex={-1} {...childProps}>
        {props.iconLeft && <Icon className='icon-left' {...props.iconProps} />}
        {props.children}
        {props.iconRight && (
          <Icon className='icon-right' {...props.iconProps} />
        )}
      </Link.Wrapper>
    </Link.Ele>
  );
};

Link.Ele = styled.a`
  background-color: transparent;
  font-weight: 300;
  color: ${(props) => props.color};
  text-decoration: none;
  display: inline-flex;
`;

Link.Wrapper = styled.span`
  display: inline-flex;
  padding: 0.3rem;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  ${Link.Ele}:hover & {
    color: ${(props) => props.hoverColor};
    text-decoration: none;
  }
  ${Link.Ele}:focus & {
    border-color: ${red.z300};
  }
  ${Link.Ele}:active &,
  ${Link.Ele}:visited & {
    color: ${(props) => props.activeColor};
  }
  line-height: 1;
  .icon-left {
    transition: 0.3s ease;
  }
  .icon-right {
    transition: 0.4s ease;
  }

  &:hover {
    .icon-left {
      margin: 0 0.8rem 0 -0.4rem;
    }
    .icon-right {
      margin: 0 -1.1rem 0 1.5rem;
    }
  }

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    border-color: transparent;
  }
  > i {
    margin-left: ${(props) => (props.iconRight ? spacing.xxsmall : 0)};
    margin-right: ${(props) => (props.iconLeft ? spacing.xxsmall : 0)};
  }
`;

Link.propTypes = {
  /** forwarding link */
  linkTo: PropTypes.string,
  /** value for window.taget */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  /** title of link, mandatory for accessebility */
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  /** for accessebility */
  role: PropTypes.string,
  color: PropTypes.string,
  /** Text color on hover */
  hoverColor: PropTypes.string,
  /** Text color on active state */
  activeColor: PropTypes.string,
  bgColor: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  /** Icon component you want to show*/
  icon: PropTypes.func,
  /** props for icon component you want to show*/
  iconProps: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.any,
};
Link.defaultProps = {
  target: '_self',
  role: 'link',
  color: linkColor.default,
  hoverColor: linkColor.default,
  activeColor: linkColor.defaultActive,
  bgColor: 'transparent',
  iconLeft: false,
  iconRight: false,
  icon: null,
  iconProps: {},
  children: null,
};

export default React.memo(Link);
