import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { fontSizes, fontWeights, lineHeight } from '../tokens/typography';
import grey from '../tokens/color/grey';
import red from '../tokens/color/red';
import { easings } from '../tokens/AnimationsUtil';
import { onKeySelect } from '../helpers/commonHelper';
import H2 from '../Typography/Heading/H2';

const HorizontalTabs = ({
  children,
  alignLinks,
  additionalGap,
  bottomBorder,
  appearance,
  large,
  hasThinLine,
  floatBottom,
  ...props
}) => (
  <HorizontalTabs.container appearance={appearance} large={large} {...props}>
    <HorizontalTabs.Wrapper
      floatBottom={floatBottom}
      align={alignLinks}
      role='tablist'
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          gap: additionalGap,
          appearance,
          id: 'TabLink__' + index,
          key: 'Key_TabLink__' + index,
        }),
      )}
      {bottomBorder && (
        <HorizontalTabs.bottomBorder
          className='bottom-border'
          hasThinLine={hasThinLine}
        />
      )}
    </HorizontalTabs.Wrapper>
  </HorizontalTabs.container>
);

HorizontalTabs.container = styled.section`
  width: 100%;
  max-width: ${(props) => (props.large ? 110 : 90)}rem;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  min-height: ${(props) => (props.appearance === 'bold' ? `7.4rem` : '6.2rem')};
  position: relative;
`;

const positionAtBottom = css`
  position: absolute;
  bottom: 0;
  left: 0;
`;

HorizontalTabs.Wrapper = styled.section.attrs(({ align }) => {
  const mapper = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
    even: 'space-between',
  };
  return { align: mapper[align] || 'center' };
})`
  width: max-content;
  min-width: 100%;
  display: flex;
  position: relative;
  justify-content: ${(props) => props.align};
  background-color: transparent;
  margin-right: ${(props) => props.gap};
  overflow: -moz-scrollbars-none;
  overflow-x: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  :last-child {
    margin-right: 0;
    padding-right: 0;
  }
  :first-child {
    margin-left: 0;
    padding-left: 0;
  }
  ${({ floatBottom }) => floatBottom && positionAtBottom}
`;

HorizontalTabs.bottomBorder = styled.hr`
  width: calc(100% - 2px);
  height: 0rem;
  /* background-color: ${grey.z300}; */
  border-top: ${(props) => (props.hasThinLine ? 1 : 2)}px solid ${grey.z300};
  border-bottom: none;
  bottom: 1px;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  @media screen and (min-width: 768px) {
    min-width: calc(100% - 2px);
  }
`;

HorizontalTabs.Link = function HorizontalTabsLink(props) {
  const { onClick, active, gap, appearance, isSpaced } = props;
  const handleClick = (event) => {
    event.stopPropagation();

    event.target.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
    onClick(event);
  };

  return (
    <Wrapper
      {...props}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={onKeySelect(handleClick)}
      role='tab'
      gap={gap}
    >
      <HorizontalTabs.LinkEle
        {...props}
        tabIndex={-1}
        onClick={handleClick}
        onKeyDown={onKeySelect(handleClick)}
        appearance={appearance}
        isSpaced={isSpaced}
      >
        {props.children}
      </HorizontalTabs.LinkEle>
      <Bar active={active} isSpaced={isSpaced} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  margin-right: ${(props) => props.gap || 0};
  &:nth-last-child(2) {
    margin-right: 0;
  }
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`;
const Bar = styled.hr`
  height: 0.2rem;
  border-color: transparent;
  border-radius: 0.7rem;
  align-self: center;
  background-color: ${red.z400};
  transform: ${(props) => (props.active ? `none` : `scaleX(0)`)};
  width: ${(props) => (props.isSpaced ? '100%' : 'calc(100% - 3.6rem)')};
  margin: 0.8rem 0 0.1rem 0;
  will-change: transform;
  transition: transform 0.25s ${easings.easeInOutSine};
  z-index: 1;
  ${Wrapper}:first-child & {
    align-self: flex-start;
    width: 100%;
  }

  ${Wrapper}:nth-last-child(2) & {
    align-self: flex-end;
    width: ${(props) => (props.isSpaced ? 100 : 90)}%;
  }
`;

HorizontalTabs.LinkEle = styled(H2)`
  font-size: ${(props) =>
    props.appearance === 'bold' ? fontSizes.z600 : fontSizes.z300};
  line-height: ${lineHeight.medium};
  font-weight: ${(props) =>
    props.appearance === 'bold' ? fontWeights.medium : fontWeights.light};
  margin: ${(props) => (props.isSpaced ? 0.3 : 0.7)}rem 1rem;
  border: 1px solid transparent;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  white-space: nowrap;
  :last-child {
    margin-right: 0;
  }
  ${Wrapper}:focus & {
    border-color: ${red.z400};
  }

  ${Wrapper}:first-child & {
    margin-left: ${(props) => (props.isSpaced ? '1rem' : 0)};
    padding-left: ${(props) => (props.isSpaced ? '0.8rem' : 0)};
  }

  ${Wrapper}:nth-last-child(2) & {
    margin-right: ${(props) => (props.isSpaced ? '1rem' : 0)};
    padding-right: ${(props) => (props.isSpaced ? '0.8rem' : 0)};
  }

  &:focus,
  &:active {
    outline: none;
    border-color: transparent;
  }

  ${(props) =>
    props.active
      ? css`
          color: ${red.z500};
        `
      : css`
          color: ${grey.z700};
        `};
`;

HorizontalTabs.Link.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  appearance: PropTypes.oneOf(['default', 'bold']),
  isSpaced: PropTypes.bool,
  gap: PropTypes.string,
  children: PropTypes.node,
};

HorizontalTabs.Link.defaultProps = {
  onClick: () => {},
  active: false,
  appearance: 'default',
  isSpaced: false,
};

HorizontalTabs.propTypes = {
  alignLinks: PropTypes.oneOf(['center', 'left', 'right', 'even']),
  /** minimum gap between tabs is 36px (3.6rem), additionalGap adds to it */
  additionalGap: PropTypes.number,
  bottomBorder: PropTypes.bool,
  appearance: PropTypes.oneOf(['default', 'bold']),
  large: PropTypes.bool,
  hasThinLine: PropTypes.bool,
  children: PropTypes.node,
  floatBottom: PropTypes.bool,
};

HorizontalTabs.defaultProps = {
  alignLinks: 'center',
  additionalGap: '2rem',
  bottomBorder: false,
  appearance: 'default',
  large: false,
  hasThinLine: false,
  children: null,
  floatBottom: false,
};

export default HorizontalTabs;
