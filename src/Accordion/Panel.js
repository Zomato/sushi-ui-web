import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import H5 from '../Typography/Heading/H5';
import { P } from '../Typography/Text';
import PropTypes from 'prop-types';
import grey from '../tokens/color/grey';
import black from '../tokens/color/black';
import { onKeySelect } from '../helpers/commonHelper';
import Cross from '../Icons/all/Cross';
import misc from '../tokens/misc';
import ChevronDown from '../Icons/all/ChevronDown';

const panelMaxHeight = '1000rem'; //set it to max value to avoid height errors

const Panel = (props) => {
  const {
    title,
    // eslint-disable-next-line react/prop-types
    isCurrentlyOpen: setOpen,
    children,
    disabled,
    expanded: open,
    subTitle,
    isCompact,
    sidePadding,
    onPanelChange,
    TitleComponent,
    isSlim,
    onExpandedSetForPanel,
    withCrossIcon,
  } = props;

  const openClosePanel = () => {
    !disabled && onPanelChange({ open: setOpen });
  };
  /** className is passed dynamically by styled components
   * so if we do {...props}, it will apply parent styles to the child as well.
   * Hence, it will break the styles of components
   * */

  /**
   *  The expanded prop will be passed down by the consumer of accordion's panel
   *  which should trigger the change in single source of truth ie.
   *  the isOpened state in Accordion component
   *  to refect the currently opened / closed panel.
   */
  useEffect(() => {
    !disabled && onExpandedSetForPanel({ open: open });
  }, [open]);

  return (
    <Panel.Container
      open={setOpen}
      isCompact={isCompact}
      disabled={disabled}
      isSlim={isSlim}
      {...props}
    >
      <Panel.Header
        open={setOpen}
        onClick={openClosePanel}
        onKeyDown={onKeySelect(openClosePanel)}
        tabIndex={disabled ? -1 : 0}
        role='button'
        aria-expanded={setOpen}
        aria-disabled={disabled || null}
        aria-label={title}
        {...props}
      >
        <TitleWrapper>
          {TitleComponent ? (
            <TitleComponent title={title} subTitle={subTitle} />
          ) : (
            <>
              <Title>{title}</Title>
              {subTitle && <SubTitle>{subTitle}</SubTitle>}
            </>
          )}
        </TitleWrapper>

        {withCrossIcon ? (
          <Panel.Icon
            color={black}
            open={setOpen}
            tabIndex={-1}
            aria-hidden={true}
          />
        ) : (
          <Panel.IconCompact
            color={black}
            open={setOpen}
            tabIndex={-1}
            aria-hidden={true}
          />
        )}

        {/* </Panel.HeaderFocus> */}
      </Panel.Header>
      {!isCompact && !isSlim && setOpen && children ? (
        <LineWrapper sidePadding={sidePadding}>
          <Line />
        </LineWrapper>
      ) : null}
      {setOpen && children ? (
        <Panel.Content
          open={setOpen}
          tabIndex={setOpen && !disabled ? 0 : -1}
          sidePadding={sidePadding}
          isSlim={isSlim}
        >
          {children}
        </Panel.Content>
      ) : null}
    </Panel.Container>
  );
};

const LineWrapper = styled.section`
  width: 100%;
  padding: ${(props) => `0rem ${props.sidePadding}`};
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Line = styled.hr`
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  height: 0.1rem;
  color: #f4f4f4;
  background-color: #f4f4f4;
  border: none;
`;

Panel.Container = styled.div`
  padding: 0;
  background: #ffffff;
  border: ${(props) =>
    props.isCompact || props.isSlim ? 'none' : '1px solid #f4f4f4'};
  box-sizing: border-box;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  ${(props) =>
    props.isCompact || props.isSlim
      ? css`
          border: none;
          border-radius: 0;
          box-shadow: none;
          border-top: 1px solid #f4f4f4;
          margin-bottom: 0;
        `
      : css`
          border: 1px solid #f4f4f4;
          border-radius: 0.6rem;
          box-shadow: 0px 1rem 7rem rgba(228, 233, 235, 0.2);
          margin-bottom: 1.6rem;
          @media screen and (max-width: 768px) {
            margin-bottom: 0;
            border: none;
            border-top: 1px solid #f4f4f4;
            width: 100%;
            border-radius: 0;
            &:last-child {
              border-bottom: 1px solid #f4f4f4;
              box-shadow: none;
            }
          }
        `}

  ${(props) =>
    props.isSlim &&
    css`
      border: 1px solid ${grey.z200};
      border-bottom: none;

      &:first-child {
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
      }
      &:last-child {
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        border-bottom: 1px solid #e8e8e8;
      }
    `}
  box-shadow: ${(props) => (props.isCompact ? 'none' : '')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

Panel.IconCompact = styled(ChevronDown)`
  transform: ${(props) => (props.open ? 'rotate(-180deg)' : 'rotate(0)')};
  transition: transform ${misc.animationDuration} ${misc.animation.easeIn};
  /* Safari button margins reset */
  margin-top: 0;
  margin-left: 0;
  white-space: nowrap;
`;
Panel.Icon = styled(Cross)`
  transform: ${(props) => (props.open ? 'rotate(0)' : 'rotate(-135deg)')};
  transition: transform ${misc.animationDuration}
    ${misc.animation.easeInBackCurve};
  /* Safari margins reset */
  margin-top: 0;
  margin-left: 0;
  white-space: nowrap;
  :focus,
  :active {
    outline: none;
  }
  outline: none;
`;

Panel.HeaderFocus = styled.div`
  display: block;

  padding: 0;
`;

Panel.Header = styled.div`
  /* Safari button margins reset */
  margin-top: 0;
  margin-left: 0;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => `2rem ${props.sidePadding}`};
  /* ${Panel.Header}:focus & {
    outline: none;
    box-shadow: ${misc.focusBoxShadow.inset_red};
  } */
  :focus {
    outline: none;
    box-shadow: none;
  }
`;

const Title = styled(H5)`
  color: ${black};
  font-size: 20px;
  line-height: 26px;
  margin: 0;
`;

const TitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
`;
const SubTitle = styled(P)`
  font-size: 16px;
  line-height: 21px;
  color: ${grey.z800};
  margin: 0.4rem 0 0 0;
`;

Panel.Content = styled.section`
  color: ${grey.z700};
  padding-top: 1rem;
  padding-bottom: ${(props) => (props.open ? '2rem' : 0)};
  max-height: ${(props) => (props.open ? panelMaxHeight : 0)};
  /* transitions do not work with height auto, one hack is to play around with max-height (set it to some max value which will not affect the original height) */
  padding-left: ${(props) => props.sidePadding};
  padding-right: ${(props) => props.sidePadding};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  &:focus {
    outline: none;
  }
  transition: ${(props) =>
    props.open
      ? 'max-height .25s ease-in-out, opacity 0.5s .25s linear;'
      : 'opacity .25s linear, max-height .5s;'};
`;

Panel.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  /** if you pass TitleComponent, it will replace title and subtitle with your custom component
   *  TODO: write custom propType for this.
   */
  TitleComponent: PropTypes.node,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  isCompact: PropTypes.bool,
  isSlim: PropTypes.bool,
  sidePadding: PropTypes.string,
  onPanelChange: PropTypes.func,
  withCrossIcon: PropTypes.bool,
  children: PropTypes.node,
  onExpandedSetForPanel: PropTypes.func,
};

Panel.defaultProps = {
  disabled: false,
  expanded: false,
  TitleComponent: null,
  sidePadding: '2.4rem',
  isSlim: false,
  isCompact: false,
  withCrossIcon: false,
};

export default React.memo(Panel);
