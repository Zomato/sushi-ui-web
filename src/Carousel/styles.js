import styled, { css } from 'styled-components';

import red from '../tokens/color/red';
import grey from '../tokens/color/grey';
import white from '../tokens/color/white';
import black from '../tokens/color/black';

const getPVArrowPosition = (props) => (props.isLeft ? '-4rem' : '-3rem');
const getArrowPosition = (props) =>
  props.default
    ? '-1.7rem'
    : props.isPhotoViewer
    ? getPVArrowPosition(props)
    : '3rem';
const getArrowVisibility = (props) =>
  props.default || props.isPhotoViewer || props.forceArrowVisible
    ? 'visible'
    : 'hidden';
const getArrowOpacity = (props) =>
  props.default || props.isPhotoViewer ? 1 : 0.6;
const getTop = (props) => props.arrowFromTop || 'auto';
const getLeftArrowWrapper = (props) =>
  props.isLeft ? getArrowPosition(props) : 'unset';
const getRightArrowWrapper = (props) =>
  props.isLeft ? 'unset' : getArrowPosition(props);
const getMobileTop = (props) =>
  props.mobileArrowFromTop || props.arrowFromTop || 'auto';

const getLeftArrowWrapperForMobile = (props) =>
  props.isLeft ? (props.isPhotoViewer ? '2rem' : '3rem') : 'unset';
const getRightArrowWrapperForMobile = (props) =>
  props.isLeft ? 'unset' : props.isPhotoViewer ? '2rem' : '3rem';
const getOpacity = (props) => (props.active ? 0.75 : 0.25);
const getScrollSectionSize = ({ isSmallDot }) => `${isSmallDot ? 0.75 : 1}rem`;

export const ArrowWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: ${(props) => (props.arrowHidden ? '0' : '3.4rem')};
  display: flex;
  align-items: center;
  visibility: ${getArrowVisibility};
  opacity: ${getArrowOpacity};
  left: ${getLeftArrowWrapper};
  right: ${getRightArrowWrapper};
  ${(props) =>
    props.isPhotoViewer &&
    css`
      top: 0;
      @media screen and (max-width: 768px) {
        left: ${getLeftArrowWrapperForMobile};
        right: ${getRightArrowWrapperForMobile};
      }
    `}
  @media (max-width: 480px) {
    width: 3.4rem;
  }
`;

export const SpinnerWrapper = styled.section`
  height: 3.4rem;
  width: 3.4rem;
  background: ${white};
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  top: ${getTop};
  display: 'initial';
  border: 4px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.section`
  font-size: 0;
  height: ${(props) => (props.isPhotoViewer ? '5.4rem' : '3.4rem')};
  width: ${(props) => (props.isPhotoViewer ? '5.4rem' : '3.4rem')};
  background: ${(props) => (props.isPhotoViewer ? 'transparent' : white)};
  box-shadow: ${(props) =>
    props.isPhotoViewer
      ? 'none'
      : `0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);`};
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  top: ${getTop};
  left: ${({ arrowInsetPadding, isLeft }) =>
    isLeft ? arrowInsetPadding : 'unset'};
  right: ${({ arrowInsetPadding, isLeft }) =>
    isLeft ? 'unset' : arrowInsetPadding};
  display: ${(props) => (props.arrowHidden ? 'none' : 'initial')};
  border: ${(props) =>
    props.isPhotoViewer ? 'none' : '4px solid transparent'};
  &:hover {
    background: ${(props) => (props.isPhotoViewer ? 'transparent' : grey.z100)};
  }
  &:active {
    background: ${(props) => (props.isPhotoViewer ? 'transparent' : grey.z200)};
  }

  &:focus {
    border-color: ${red.z200};
    box-shadow: ${(props) =>
      props.isPhotoViewer ? 'none' : '-4px 5px 12px rgba(60, 64, 69, 0.12)'};
    outline: none;
  }

  align-self: center;
  cursor: pointer;
  &:before {
    left: ${(props) => (props.isLeft ? '1rem' : '0.8rem')};
    transform: ${(props) =>
      props.isLeft ? 'rotate(135deg)' : 'rotate(-45deg)'};
    top: 0.9rem;
    position: absolute;
    width: 0.9rem;
    height: 0.9rem;
    content: '';
    border-color: ${(props) => (props.isPhotoViewer ? white : black)};
    border-style: solid;
    border-top: 0;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-left: 0;
    font-size: 13.5px;
    color: #696969;
    font-weight: bold;

    ${(props) =>
      props.isPhotoViewer &&
      css`
        @media screen and (min-width: 768px) {
          top: 2.9rem;
          width: 2.9rem;
          height: 2.9rem;
          border-right-width: 6px;
          border-bottom-width: 6px;
          border-radius: 4px;
        }

        @media screen and (max-width: 768px) {
          top: 1.9rem;
          width: 1.9rem;
          height: 1.9rem;
          border-right-width: 4px;
          border-bottom-width: 4px;
          border-radius: 3px;
        }
      `}
  }

  @media (max-width: 480px) {
    top: ${getMobileTop};
    display: ${(props) => (props.mobileArrowHidden ? 'none' : 'initial')};

    ${(props) =>
      props.isPhotoViewer &&
      css`
        height: 3.4rem;
        width: 3.4rem;
      `}
  }

  @media (max-width: 768px) and (min-width: 481px) {
    display: ${(props) => (props.tabArrowHidden ? 'none' : 'initial')};
    ${(props) =>
      props.isPhotoViewer &&
      css`
        height: 3.4rem;
        width: 3.4rem;
      `}
  }
`;

export const Li = styled.li`
  margin: 0px;
  position: relative;
  display: inline-block;
  width: ${(props) => (props.activeRedDots ? '1rem' : '2rem')};
  height: 20px;
  padding: 0;
  cursor: pointer;
`;

export const Btn = styled.button`
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
  &:before {
    font-size: ${(props) =>
      props.activeRedDots ? (props.active ? '3rem' : '2rem') : '4rem'};
    line-height: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: ${getOpacity};
    color: ${(props) =>
      props.activeRedDots && props.active ? red.z500 : 'black'};
    -webkit-font-smoothing: antialiased;
  }
`;

export const Dots = styled.ul`
  justify-content: center;
  font-size: 2.2rem;
  display: flex !important;
  position: absolute;
  bottom: ${({ isInside }) => (isInside ? 1.5 : -2.5)}rem;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
`;
export const ScrollContent = styled.section`
  &:before {
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
    font-size: ${(props) => (props.isSmallDot ? '2rem' : '3rem')};
    line-height: 1rem;
    position: absolute;
    left: 0;
    content: '•';
    text-align: center;
    color: ${white};
    opacity: ${(props) => (props.active ? 1 : 0.5)};
    width: 1rem;
  }
`;

export const ScrollSection = styled.section`
  margin: 0;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  position: relative;
  width: ${getScrollSectionSize};
  height: ${getScrollSectionSize};
  padding: 0;
  ${(props) =>
    props.isFirstDot &&
    css`
      margin-left: 0.5rem;
    `}
  ${(props) =>
    props.isLastDot &&
    css`
      margin-right: 0.5rem;
    `}
`;
export const ScrollBackground = styled.div`
  position: absolute;
  background-color: ${black};
  opacity: 0.24;
  width: 8.2rem;
  height: 2rem;
  border-radius: 1.2rem;
`;

export const ScrollWrapper = styled.section`
  position: relative;
  width: 8.2rem;
  overflow: hidden;
  touch-action: manipulation;
  margin: 0;
  max-width: 8.2rem;
  height: 2rem;
  display: flex;
  align-items: center;
`;
export const ScrollableDots = styled.section`
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: 0.4rem;
  transform: ${(props) => `translateX(${props.transitionWidth}px)`};
  transition: transform 0.45s ease-in-out 0s;
`;
export const DotWrapper = styled.div`
  justify-content: center;
  font-size: 2.2rem;
  display: flex !important;
  position: absolute;
  bottom: ${({ isInside }) => (isInside ? 1.5 : -3.5)}rem;
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
`;
