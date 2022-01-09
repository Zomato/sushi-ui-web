import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Portal from '../HOC/Portal';
import Button from '../Button';
import Cross from '../Icons/all/Cross';
import black from '../tokens/color/black';
import white from '../tokens/color/white';
import grey from '../tokens/color/grey';
import _noop from 'lodash-es/noop';
import _get from 'lodash-es/get';
import misc from '../tokens/misc';
import { onKeySelect } from '../helpers/commonHelper';

const modalWidth = {
  small: '20vw',
  medium: '40vw',
  large: '60vw',
  huge: '95vw',
  default: 'max-content',
};

const Modal = ({
  mode,
  onClose,
  visible,
  type,
  children,
  isDialog,
  onAccept,
  onReject,
  acceptLabel,
  rejectLabel,
  title,
  showCloseIcon,
  slideOnMobile,
  isCentered,
  titleComponent,
  padding,
  overlayClickClose,
  maxHeight,
  minHeight,
  enableScrollOnClose,
  className,
  showFooter,
  renderFooter,
  overlayOpacity,
  flatModal,
  extraCurved,
  mobileHeight,
  autoHeight,
  bgColor,
  preventFocus,
  useAbsoluteHeight,
  zIndex,
  id,
  isMobileDialog,
}) => {
  const ref = useRef();

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'auto';
    return enableScrollOnClose
      ? () => (document.body.style.overflow = 'auto')
      : _noop;
  }, [visible]);

  useEffect(() => {
    if (visible && ref.current && !preventFocus) ref.current.focus();
  }, [visible]);

  const handleOnBlur = () => {
    if (visible) ref.current.focus();
  };

  const handleKeyPress = (e) => {
    e.stopPropagation();
    e.keyCode === 27 ? onClose(e) : null;
  };

  const handleOverlayClick = (e) => overlayClickClose && onClose(e);

  // modal will be scrollable if mobileheight set to 0vh
  const onModalScroll = (e) => {
    if (
      !e.target.scrollTop &&
      mobileHeight === '0vh' &&
      e.target.classList.contains('modalWrapper')
    ) {
      onClose(e); // scrollable modal will get close on full page scroll
    }
  };

  return (
    <Portal>
      <Modal.Wrapper
        className={`modalWrapper ${className}`}
        aria-hidden={visible ? 'false' : 'true'}
        role='dialog'
        visible={visible}
        autoHeight={autoHeight}
        useAbsoluteHeight={useAbsoluteHeight}
        onScroll={onModalScroll}
        zIndex={zIndex}
      >
        <Modal.Overlay
          onClick={handleOverlayClick}
          visible={visible}
          tabIndex='-1'
          overlayOpacity={overlayOpacity}
        />
        {autoHeight && <AutoHeightDiv />}
        <ModalContainer
          id={id}
          mode={mode}
          type={type}
          visible={visible}
          mobileHeight={mobileHeight}
          isDialog={isDialog}
          shouldSlide={slideOnMobile}
          isCentered={isCentered}
          padding={padding}
          tabIndex='0'
          onKeyDown={handleKeyPress}
          ref={ref}
          flatModal={flatModal}
          extraCurved={extraCurved}
          autoHeight={autoHeight}
          bgColor={bgColor}
          isMobileDialog={isMobileDialog}
        >
          {!isDialog && (title || titleComponent) && (
            <ModalContainer.Head padding={padding}>
              {title ? (
                <ModalContainer.Title mode={mode}>{title}</ModalContainer.Title>
              ) : titleComponent ? (
                titleComponent
              ) : null}
              {showCloseIcon && (
                <StyledCross
                  size={24}
                  color={mode === 'dark' ? grey.z500 : black}
                  showPointer={true}
                  onClick={onClose}
                  onKeyUp={onKeySelect(onClose)}
                  tabIndex='0'
                  aria-label='close Modal'
                />
              )}
            </ModalContainer.Head>
          )}
          <ModalContainer.Content
            visible={visible}
            maxHeight={maxHeight}
            minHeight={minHeight}
          >
            {children}
          </ModalContainer.Content>
          {isDialog && (
            <ActionButtons
              rejectLabel={rejectLabel}
              acceptLabel={acceptLabel}
              onReject={onReject}
              onAccept={onAccept}
            />
          )}
          {showFooter && renderFooter()}
        </ModalContainer>
        <DummyDiv tabIndex='0' onFocus={handleOnBlur} />
      </Modal.Wrapper>
    </Portal>
  );
};

const getWindowHeight = () => window.innerHeight;

const AutoHeightDiv = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
    min-height: 5vh;
    flex-grow: 1;
    width: 100%;
  }
`;

const StyledCross = styled(Cross)`
  max-height: 3rem;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const DummyDiv = styled.div`
  height: 0;
  width: 0;
`;

const ActionButtons = (props) => {
  const {
    rejectLabel = 'No',
    acceptLabel = 'Yes',
    onReject = _noop,
    onAccept = _noop,
  } = props;

  return (
    <ActionButtons.Wrapper>
      <ActionButtons.Holder>
        <Button
          appearance='link'
          btnColor='red'
          size='small'
          onKeyUp={onKeySelect(onReject)}
          onClick={onReject}
          tabIndex='0'
          role='button'
        >
          {rejectLabel}
        </Button>
        <ActionButtons.Gap />
        <Button
          btnColor='red'
          size='small'
          onClick={onAccept}
          onKeyUp={onKeySelect(onAccept)}
          tabIndex='0'
          role='button'
        >
          {acceptLabel}
        </Button>
      </ActionButtons.Holder>
    </ActionButtons.Wrapper>
  );
};

ActionButtons.propTypes = {
  rejectLabel: PropTypes.string,
  acceptLabel: PropTypes.string,
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
};

ActionButtons.Holder = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  min-width: max-content;
  margin-top: 1rem;
`;

ActionButtons.Gap = styled.div`
  height: 1rem;
  width: 1rem;
`;

ActionButtons.Wrapper = styled.div`
  display: flex;
`;

Modal.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: max-content;
  height: ${(props) =>
    props.useAbsoluteHeight ? `calc(${getWindowHeight})` : '100%'};
  display: flex;
  justify-content: center;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  overflow: auto;
  z-index: ${(props) => props.zIndex || 11};
  ${(props) =>
    props.autoHeight &&
    css`
      @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
      }
    `}
`;

Modal.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  isDialog: PropTypes.bool,
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
  rejectLabel: PropTypes.string,
  acceptLabel: PropTypes.string,
  title: PropTypes.string,
  showCloseIcon: PropTypes.bool,
  type: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'default']),
  slideOnMobile: PropTypes.bool,
  isCentered: PropTypes.bool,
  titleComponent: PropTypes.node,
  padding: PropTypes.string,
  overlayClickClose: PropTypes.bool,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  enableScrollOnClose: PropTypes.bool,
  className: PropTypes.string,
  showFooter: PropTypes.bool,
  renderFooter: PropTypes.func,
  overlayOpacity: PropTypes.number,
  flatModal: PropTypes.bool,
  extraCurved: PropTypes.bool,
  mobileHeight: PropTypes.string,
  bgColor: PropTypes.string,
  preventFocus: PropTypes.bool,
  useAbsoluteHeight: PropTypes.bool,
  zIndex: PropTypes.number,
  id: PropTypes.string,
  isMobileDialog: PropTypes.bool,
  autoHeight: PropTypes.string,
};

Modal.defaultProps = {
  mode: 'light',
  onClose: _noop,
  visible: false,
  type: 'default',
  children: null,
  isDialog: false,
  onAccept: _noop,
  onReject: _noop,
  acceptLabel: '',
  rejectLabel: '',
  title: '',
  showCloseIcon: true,
  slideOnMobile: false,
  isCentered: false,
  titleComponent: null,
  padding: '',
  overlayClickClose: true,
  maxHeight: '',
  minHeight: '8rem',
  enableScrollOnClose: true,
  className: '',
  showFooter: false,
  renderFooter: _noop,
  overlayOpacity: 0.85,
  flatModal: false,
  extraCurved: false,
  mobileHeight: '95vh',
  bgColor: white,
  preventFocus: false,
  useAbsoluteHeight: false,
  zIndex: 11,
  id: 'id-' + Math.floor(Math.random() * 100),
  isMobileDialog: false,
  autoHeight: '',
};

const getModalWidth = ({ type }) => modalWidth[type];
const getModalMobileWidth = ({ shouldSlide, isMobileDialog }) => {
  if (isMobileDialog) {
    return '80vw';
  }
  if (shouldSlide) {
    return '100vw';
  }
  return '95vw';
};

Modal.Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${black};
  opacity: ${(props) => (props.visible ? props.overlayOpacity : 0)};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  transition: opacity ${misc.animationDuration} ease;
`;

const ModalContainer = styled.div`
  background-color: ${(props) =>
    props.mode === 'dark' ? grey.z900 : props.bgColor};
  height: max-content;
  transform: translate3d(0, 0, 0);
  @media (min-width: 481px) {
    width: ${getModalWidth};
    margin: ${(props) => (props.isCentered ? 'auto' : '5rem auto')};
    min-height: ${(props) => (props.isDialog ? 0 : '150px')};
    min-width: 20rem;
    border-radius: 0.6rem;
    transform: scale(${(props) => (props.visible ? 1 : 1.2)});
    box-shadow: 0 1.2rem 7rem rgba(28, 28, 28, 0.15);
    transition: transform ${misc.animationDuration} ease;
  }
  @media (max-width: 480px) {
    width: ${getModalMobileWidth};
    border-radius: ${({ isMobileDialog }) =>
      isMobileDialog ? '1.2rem' : 'unset'};
    min-height: ${(props) => (props.shouldSlide ? props.mobileHeight : 'auto')};
    margin: ${(props) => (props.isCentered ? 'auto' : 0)};
    ${({ flatModal, extraCurved, shouldSlide }) =>
      shouldSlide &&
      css`
        margin-top: ${(props) =>
          props.visible ? `calc(100vh - ${props.mobileHeight})` : '100vh'};
        transition: all ${misc.animationDuration} ease, visibility 0ms ease;
        border-radius: ${extraCurved
          ? '1.2rem 1.2rem 0 0'
          : !flatModal && '0.6rem 0.6rem 0 0'};
      `}

    ${({ autoHeight }) =>
      autoHeight &&
      css`
        margin-top: 0;
        min-height: 0;
      `}
  }
  opacity: 1;
  z-index: 1;
  display: ${(props) => (props.visible ? 'block' : 'flex')};
  padding: ${(props) =>
    props.isDialog ? '2rem' : props.padding ? props.padding : 0};
`;

ModalContainer.Head = styled.section`
  width: ${(props) =>
    props.padding ? 'calc(100% + 0.5rem)' : 'calc(100% - 4.6rem)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => (props.padding ? '0' : '2rem 2.2rem 0 2.4rem')};
  @media (max-width: 480px) {
    width: ${(props) =>
      props.padding ? 'calc(100% + 0.5rem)' : 'calc(100% - 2.6rem)'};
    margin: ${(props) => (props.padding ? '0' : '1rem 1.2rem 0 1.4rem')};
  }
`;

ModalContainer.Title = styled.h2`
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 400;
  color: ${(props) => (props.mode === 'dark' ? white : black)};
  margin-top: 0.5rem;
  margin-bottom: 0.83rem;
`;

ModalContainer.Content = styled.section`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  max-height: ${(props) => _get(props, 'maxHeight', 'fit-content')};
  overflow: ${(props) => (props.maxHeight ? 'auto' : 'initial')};
  @media (max-width: 480px) {
    min-height: ${(props) => props.minHeight};
  }
`;

export default Modal;
