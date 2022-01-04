import React, { useRef, useEffect, useContext, useCallback } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import _noop from 'lodash-es/noop';
import Portal from '../HOC/Portal';
import Cross from '../Icons/all/Cross';
import white from '../tokens/color/white';
import black from '../tokens/color/black';
import grey from '../tokens/color/grey';
import green from '../tokens/color/green';
import yellow from '../tokens/color/yellow';
import red from '../tokens/color/red';
import misc from '../tokens/misc';
import {
  ToastContext,
  ADD_TOP_TOAST,
  ADD_BOTTOM_TOAST,
  REMOVE_TOP_TOAST,
  REMOVE_BOTTOM_TOAST,
} from '../ToastContainer';

const TOAST_TYPES = {
  top: {
    add: ADD_TOP_TOAST,
    remove: REMOVE_TOP_TOAST,
  },
  bottom: {
    add: ADD_BOTTOM_TOAST,
    remove: REMOVE_BOTTOM_TOAST,
  },
};

const Toast = (props) => {
  const {
    text = '',
    show = false,
    align = 'bottom',
    type = 'default',
    onClose = _noop,
    autoHideDuration = 3,
    className = '',
  } = props;
  const { state, dispatch } = useContext(ToastContext);
  const { topToasts, bottomToasts } = state;
  const toasts = align == 'top' ? topToasts : bottomToasts;
  const handleClose = useCallback(() => {
    const fn = TOAST_TYPES[align].remove;
    dispatch(fn(node.current));
    onClose();
  });

  const node = useRef();

  useEffect(() => {
    if (show) {
      const fn = TOAST_TYPES[align].add;
      dispatch(fn(node.current));
    }
  }, [align, dispatch, show]);

  useEffect(() => {
    if (show) {
      const timeOut = setTimeout(handleClose, autoHideDuration * 1000);
      return () => clearTimeout(timeOut);
    }
  }, [autoHideDuration, handleClose, show]);

  const toastindex = toasts.indexOf(node.current);
  const length = toasts.length;
  const count = length - toastindex - 1;

  const getMargin = () => `calc(5% + (${count} * 6.5rem));`;

  return (
    <Portal>
      <Toast.Wrapper
        className={className}
        show={show}
        position={align}
        type={type}
        margin={getMargin()}
        ref={node}
      >
        <Toast.Span>{text}</Toast.Span>
        <Cross
          onClick={handleClose}
          showPointer={true}
          color={getColor(props)}
        />
      </Toast.Wrapper>
    </Portal>
  );
};

Toast.propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool.isRequired,
  align: PropTypes.oneOf([
    'topRight',
    'topLeft',
    'top',
    'bottomRight',
    'bottomLeft',
    'bottom',
  ]),
  onClose: PropTypes.func.isRequired,
  autoHideDuration: PropTypes.number,
  type: PropTypes.oneOf([
    'default',
    'success',
    'successSolid',
    'warning',
    'warningSolid',
    'error',
    'errorSolid',
    'darkDefault',
  ]),
  className: PropTypes.string,
};

Toast.Span = styled.span`
  margin-right: 2rem;
  margin-top: 0.2rem;
  font-size: 1.8rem;
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
  font-weight: 300;
`;

Toast.Wrapper = styled.div`
  position: fixed;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  display: flex;
  transition: all 0.5s ease; // TODO transition
  justify-content: space-between;
  padding: 1.8rem 1.8rem;
  width: max-content;
  min-width: 50rem;
  max-width: 900px;
  font-weight: 300;
  border-radius: ${misc.radius};
  background: ${(props) => getBackground(props)};
  color: ${(props) => getColor(props)};
  ${(props) => getPositionBasedStyles(props)}
  z-index: 20;
  @media (max-width: 480px) {
    max-width: 95vw;
    min-width: 95vw;
    margin: auto;
  }
`;

const backgrounds = {
  default: grey.z100,
  success: green.z100,
  successSolid: green.z500,
  warning: yellow.z100,
  warningSolid: yellow.z500,
  error: red.z100,
  errorSolid: red.z500,
  darkDefault: grey.z900,
};

const colors = {
  default: black,
  success: green.z600,
  successSolid: white,
  warning: yellow.z600,
  warningSolid: white,
  error: red.z500,
  errorSolid: white,
  darkDefault: white,
};

// move below to helpers
const getColor = (props) => colors[props.type || 'default'] || black;

const getBackground = (props) =>
  backgrounds[props.type || 'default'] || grey.z100;

const getPositionBasedStyles = (props) =>
  positionStyles[props.position || 'bottom'] || bottomStyle;

const topRightStyle = (props) => `
  right: ${props.show ? '5%' : '-100%'}; // TODO
  top: 10%;
`;

const topLeftStyle = (props) => css`
  left: ${props.show ? '5%' : '-100%'}; // TODO
  top: 10%;
`;

const topStyle = (props) => css`
  top: ${props.show ? props.margin : '-5%'}; // TODO
  left: 50%;
  transform: translate(-50%, 0);
`;
const bottomRightStyle = (props) => css`
  right: ${props.show ? '5%' : '-100%'}; // TODO
  bottom: 10%;
`;

const bottomLeftStyle = (props) => css`
  left: ${props.show ? '5%' : '-100%'}; // TODO
  bottom: 10%;
`;

const bottomStyle = (props) => css`
  bottom: ${props.show ? props.margin : '-5%'}; // TODO
  left: 50%;
  transform: translate(-50%, 0);
`;

const positionStyles = {
  topRight: topRightStyle,
  topLeft: topLeftStyle,
  top: topStyle,
  bottomLeft: bottomLeftStyle,
  bottomRight: bottomRightStyle,
  bottom: bottomStyle,
};

export default Toast;
