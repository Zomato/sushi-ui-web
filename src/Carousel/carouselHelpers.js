// libraries
import React from 'react';

// components
import Spinner from '../Spinner/SpinnerCircular';

// helpers
import { LEFT_ARROW } from './constants';
import _range from 'lodash-es/range';
import { onKeySelect } from '../helpers/commonHelper';

// styles
import {
  ArrowWrapper,
  SpinnerWrapper,
  Arrow,
  Li,
  Btn,
  Dots,
  ScrollContent,
  ScrollSection,
  ScrollBackground,
  ScrollWrapper,
  ScrollableDots,
  DotWrapper,
} from './styles';

const renderArrow = (
  onClick,
  isDefaultTheme,
  forceArrowVisible,
  arrowFromTop,
  mobileArrowFromTop,
  mobileArrowHidden,
  arrowHidden,
  tabArrowHidden,
  isPhotoViewer,
  type,
  loading = false,
  arrowClassName,
  arrowInsetPadding,
) => {
  const isLeft = type === LEFT_ARROW;

  return (
    <ArrowWrapper
      className={arrowClassName}
      default={isDefaultTheme}
      forceArrowVisible={forceArrowVisible}
      isLeft={isLeft}
      isPhotoViewer={isPhotoViewer}
      arrowHidden={arrowHidden}
    >
      {loading ? (
        <SpinnerWrapper arrowFromTop={arrowFromTop}>
          <Spinner size='small' color='#363636' />
        </SpinnerWrapper>
      ) : (
        <Arrow
          isLeft={isLeft}
          onClick={onClick}
          onKeyDown={onKeySelect(onClick)}
          arrowFromTop={arrowFromTop}
          mobileArrowFromTop={mobileArrowFromTop}
          mobileArrowHidden={mobileArrowHidden}
          arrowHidden={arrowHidden}
          tabArrowHidden={tabArrowHidden}
          isPhotoViewer={isPhotoViewer}
          tabIndex={0}
          role='button'
          aria-controls='carousel-items'
          aria-label={isLeft ? 'Previous Slide' : 'Next Slide'}
          arrowInsetPadding={arrowInsetPadding}
        />
      )}
    </ArrowWrapper>
  );
};

const dotRenderer = (
  isVisible,
  maxDots,
  onDotClick,
  active,
  insideDots,
  activeRedDots,
  scrollableDots,
  scrollValue,
  currentWindowFirstIndex,
  currentWindowLastIndex,
) => {
  return (
    isVisible &&
    (!scrollableDots ? (
      <Dots isInside={insideDots}>
        {_range(maxDots).map((val, index) => (
          <Li
            onClick={onDotClick(index)}
            key={`dot_${index}`}
            activeRedDots={activeRedDots}
          >
            <Btn active={index === active} activeRedDots={activeRedDots} />
          </Li>
        ))}
      </Dots>
    ) : (
      <DotWrapper isInside={insideDots}>
        <ScrollWrapper>
          <ScrollBackground />
          <ScrollableDots transitionWidth={scrollValue}>
            {_range(maxDots).map((val, index) => {
              const isSmallDot =
                (index === currentWindowFirstIndex ||
                  index === currentWindowLastIndex) &&
                index !== 0 &&
                index !== maxDots - 1;
              return (
                <ScrollSection
                  key={`dot_${index}`}
                  isFirstDot={index === currentWindowFirstIndex}
                  isLastDot={
                    index === currentWindowLastIndex || index === maxDots - 1
                  }
                  isSmallDot={isSmallDot}
                >
                  <ScrollContent
                    active={index === active}
                    isSmallDot={isSmallDot}
                    isVisible={
                      index >= currentWindowFirstIndex &&
                      index <= currentWindowLastIndex
                    }
                  />
                </ScrollSection>
              );
            })}
          </ScrollableDots>
        </ScrollWrapper>
      </DotWrapper>
    ))
  );
};
const getTrackWidth = (props) => `${props.totalWidth * props.componentCount}px`;

const getAttributes = (key) => (props) => props[key];

const getComponentWrapperWidth = (props) =>
  (props.totalWidth - props.totalMargin) / props.slidesToShow;

const getTransform = (props) => `translateX(-${props.transitionWidth}px)`;

export {
  renderArrow,
  dotRenderer,
  getTrackWidth,
  getAttributes,
  getComponentWrapperWidth,
  getTransform,
};
