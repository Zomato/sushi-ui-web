// libraries
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash-es/noop';
import _get from 'lodash-es/get';
import _debounce from 'lodash-es/debounce';

// helpers
import {
  renderArrow,
  getTrackWidth,
  getAttributes,
  getComponentWrapperWidth,
  getTransform,
  dotRenderer,
} from './carouselHelpers';
import { LEFT_ARROW, RIGHT_ARROW } from './constants';
const maxDotsInCarousel = 6;
const ScrollableDotSize = 12.5;
const Carousel = (props) => {
  const {
    componentData,
    componentToRender: DesiredComp,
    currentIndex = 0,
    moveToIndex = -1,
    autoScroll,
    autoScrollTimeout,
    arrowInsetPadding,
    activeRedDots,
    scrollableDots,
  } = props;
  const [currentWindowFirstIndex, setCurrentWindowFirstIndex] = useState(0);
  const [currentWindowLastIndex, setCurrentWindowLastIndex] = useState(
    maxDotsInCarousel - 1,
  );
  const [scrollValue, setScrollValue] = useState(0);
  const [loading, setLoading] = useState({ left: false, right: false });
  const [active, setActive] = useState(currentIndex);
  const [timer, setTimer] = useState(-1);
  const [width, setWidth] = useState(0);
  const [isDragging, setDragging] = useState(false);
  const [dragPosition, setInitialPosition] = useState(0);
  const [dragTransition, setDragTransition] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  const [timerCount, setTimerCount] = useState(autoScrollTimeout);
  const [carouselData, setCarouselData] = useState(componentData);
  const [showTransition, setTransition] = useState(true);

  const [slidesToShow, setSlidesToShow] = useState(props.slidesToShow);
  const maxDots =
    Math.ceil((carouselData.length - slidesToShow) / props.slidesToScroll) + 1;

  const hideLeftArrow =
    props.hideLeftArrow || (!props.infinite && active === 0);
  const hideRightArrow =
    props.hideRightArrow || (!props.infinite && active === maxDots - 1);

  const node = useRef();

  useEffect(() => {
    setCarouselData(componentData);
  }, [componentData]);

  useEffect(() => {
    props.arrowClicked({
      ...componentData[active],
      ...props.commonProps,
      index: active,
    });
    if (maxDots > maxDotsInCarousel && scrollableDots) {
      if (currentWindowFirstIndex === active && active !== 0) {
        setScrollValue(scrollValue + ScrollableDotSize);
        setCurrentWindowFirstIndex(active - 1);
        setCurrentWindowLastIndex(currentWindowLastIndex - 1);
      } else if (currentWindowLastIndex === active && active !== maxDots - 1) {
        setScrollValue(scrollValue - ScrollableDotSize);
        setCurrentWindowFirstIndex(currentWindowFirstIndex + 1);
        setCurrentWindowLastIndex(active + 1);
      } else if (active === 0) {
        setCurrentWindowFirstIndex(0);
        setCurrentWindowLastIndex(5);
        setScrollValue(0);
      } else if (active + 1 === maxDots) {
        setCurrentWindowFirstIndex(maxDots - 6);
        setCurrentWindowLastIndex(maxDots - 1);
        setScrollValue((maxDots - 6) * -ScrollableDotSize);
      }
    }
  }, [active]);

  const updateCarouselState =
    (isLeft = false) =>
    (data) => {
      if (Array.isArray(data) && data.length > 0) {
        setTransition(false);
        const updatedData = isLeft
          ? [...data, ...carouselData]
          : [...carouselData, ...data];
        const startingDelIndex = isLeft
          ? updatedData.length - props.slidesToLoad
          : 0;

        updatedData.splice(startingDelIndex, props.slidesToLoad);
        setCarouselData(updatedData);
        isLeft
          ? setActive(props.slidesToLoad - 1)
          : setActive(active - props.slidesToLoad + 1);
        setTimeout(() => setTransition(true), 300);
      }
      setLoading({ left: false, right: false });
    };

  const clickHandler = (newActive, cb, isLeft) => {
    const oldActive = active;
    const doAutoLoad = !!props.slidesToLoad && typeof cb === 'function';
    if (
      doAutoLoad &&
      ((oldActive === 0 && isLeft) || (oldActive === maxDots - 1 && !isLeft))
    ) {
      setLoading({ left: !!isLeft, right: !isLeft });
      cb(updateCarouselState(isLeft));
    } else {
      setActive(newActive);
    }
    setDisableBtn(true);
    setTimeout(() => setDisableBtn(false), 500);
  };

  const onRightClick = () => {
    if (!disableBtn) {
      const newActive = props.slidesToLoad
        ? active + 1
        : Math.floor((active + 1) % maxDots);
      clickHandler(newActive, newActive === maxDots ? props.getNext : _noop);
    }
  };

  const onLeftClick = () => {
    if (!disableBtn) {
      const newActive = Math.ceil(active === 0 ? maxDots - 1 : active - 1);
      clickHandler(
        newActive,
        newActive === maxDots - 1 ? props.getPrev : _noop,
        true,
      );
    }
  };

  const _onTouchStart = (e) => {
    setDragging(true);
    setInitialPosition(e.touches[0].pageX);
  };

  const _onTouchEnd = () => {
    setDragging(false);

    if (dragTransition < 0 && Math.abs(dragTransition) > width / 10) {
      setActive(Math.ceil(active === 0 ? maxDots - 1 : active - 1));
    }

    if (dragTransition > 0 && Math.abs(dragTransition) > width / 10) {
      setActive(Math.floor((active + 1) % maxDots));
    }

    setInitialPosition(0);
    setDragTransition(0);
  };

  const _onTouchMove = (e) => {
    const dragTrans = dragPosition - e.touches[0].pageX;
    const canDrag =
      (dragTrans < 0 && !hideLeftArrow) || (dragTrans > 0 && !hideRightArrow);

    if (isDragging && canDrag) {
      setDragTransition(dragTrans);
    }
  };

  const onDotClick = (index) => () => {
    clickHandler(index);
  };

  const calibrateForScreen = () => {
    setWidth(_get(node, 'current.clientWidth', 0));

    if (props.isResponsive && window && window.innerWidth) {
      /**
       * Calculating window innerWidth always causes reflow
       * hence run below code only when
       * dev has specifically asked for a respnsive carousel.
       */
      const screenWidth = window.innerWidth;
      switch (true) {
        case screenWidth > 480 && screenWidth <= 768:
          setSlidesToShow(props.slidesToShowTab);
          break;
        case screenWidth <= 480:
          setSlidesToShow(props.slidesToShowMobile);
          break;
        default:
          setSlidesToShow(props.slidesToShow);
          break;
      }
    }
  };

  // requires @use-it/event-listener
  // useEventListener("resize", _debounce(calibrateForScreen, 100));
  useLayoutEffect(() => {
    setWidth(node.current.clientWidth);
    typeof calibrateForScreen === 'function' && calibrateForScreen();
    window &&
      window.addEventListener &&
      window.addEventListener('resize', _debounce(calibrateForScreen, 100));
  }, []);

  const autoPlay = () => {
    clearTimeout(timer);
    if (timerCount) {
      const timerIndex = setTimeout(() => {
        setActive(Math.floor((active + 1) % maxDots));
      }, timerCount);

      setTimer(timerIndex);
    }
  };

  useLayoutEffect(() => {
    props.onSlideChange(active);
    !disableBtn && moveToIndex > -1 && setActive(moveToIndex);
    if (autoScroll) {
      autoPlay();
    }
  }, [moveToIndex, active, timerCount]);

  const getTransitionWidth = () => {
    const wrapperWidth = slidesToShow === 1 ? width : width + props.innerMargin;
    return (wrapperWidth * active * props.slidesToScroll) / slidesToShow;
  };

  const mouseEnterHandler = () => {
    setTimerCount(0);
  };

  const mouseLeaveHandler = () => {
    setTimerCount(autoScrollTimeout);
  };

  const handleKeyPress = (e) => {
    switch (e.keyCode) {
      case 37:
        //move to left
        if (typeof onLeftClick === 'function' && !hideLeftArrow) onLeftClick();
        break;
      case 39:
        //move to right
        if (typeof onRightClick === 'function' && !hideRightArrow)
          onRightClick();
        break;
      case 36:
        //Home : move to First slide
        e.stopPropagation();
        e.preventDefault();
        clickHandler(0);
        break;
      case 35:
        //End : move to Last slide
        e.stopPropagation();
        e.preventDefault();
        clickHandler(maxDots - 1);
        break;

      default:
        break;
    }
  };

  return (
    <SliderElementWrapper
      wrapperWidth={props.wrapperWidth}
      tabIndex={0}
      onKeyDown={handleKeyPress}
      aria-roledescription='carousel'
    >
      <SliderElement
        showComponents={props.showComponents}
        carouselWidth={props.carouselWidth}
        ref={node}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <SlidesWrapper>
          <Slides
            componentCount={carouselData.length}
            transitionWidth={getTransitionWidth() + dragTransition}
            slidesToScroll={Math.min(props.slidesToScroll, slidesToShow)}
            totalWidth={width}
            aria-live={autoScroll ? 'off' : 'polite'}
            id='carousel-items'
            showTransition={showTransition}
          >
            {carouselData.map((data, index) => (
              <DesiredCompWrapper
                className='carousel-content'
                aria-roledescription='slide'
                key={`slide_${index}`}
                height={props.height}
                slidesToShow={slidesToShow}
                totalWidth={width}
                onTouchStart={_onTouchStart}
                onTouchMove={_onTouchMove}
                onTouchEnd={_onTouchEnd}
                mobileHeight={props.mobileHeight}
                totalMargin={props.innerMargin * (slidesToShow - 1)}
                margin={slidesToShow === 1 ? 0 : `${props.innerMargin}px`}
              >
                <DesiredComp
                  {...data}
                  {...props.commonProps}
                  index={index}
                  isActive={index === active}
                  total={carouselData.length}
                  aria-label={`${index + 1} of ${carouselData.length}`}
                />
              </DesiredCompWrapper>
            ))}
          </Slides>
        </SlidesWrapper>
        {!hideLeftArrow &&
          renderArrow(
            onLeftClick,
            props.defaultTheme,
            props.forceArrowVisible,
            props.arrowFromTop,
            props.mobileArrowFromTop,
            props.mobileArrowHidden,
            props.arrowHidden,
            props.tabArrowHidden,
            props.isPhotoViewer,
            LEFT_ARROW,
            loading.left,
            props.arrowClassName,
            arrowInsetPadding,
          )}
        {!hideRightArrow &&
          renderArrow(
            onRightClick,
            props.defaultTheme,
            props.forceArrowVisible,
            props.arrowFromTop,
            props.mobileArrowFromTop,
            props.mobileArrowHidden,
            props.arrowHidden,
            props.tabArrowHidden,
            props.isPhotoViewer,
            RIGHT_ARROW,
            loading.right,
            props.arrowClassName,
            arrowInsetPadding,
          )}
      </SliderElement>
      {dotRenderer(
        props.dots && !props.slidesToLoad,
        maxDots,
        onDotClick,
        active,
        props.insideDots,
        activeRedDots,
        scrollableDots,
        scrollValue,
        currentWindowFirstIndex,
        currentWindowLastIndex,
      )}
    </SliderElementWrapper>
  );
};

const SliderElementWrapper = styled.section`
  position: relative;
  width: ${getAttributes('wrapperWidth')};
  &:hover .carousel-arrow {
    visibility: visible;
  }
  &:focus {
    outline: none;
  }
`;

const DesiredCompWrapper = styled.section`
  height: ${getAttributes('height')};
  width: ${getComponentWrapperWidth}px;
  margin-right: ${(props) => props.margin};
  @media (max-width: 480px) {
    height: ${getAttributes('mobileHeight') || getAttributes('height')};
  }
`;

const Slides = styled.section`
  touch-action: manipulation;
  display: flex;
  position: relative;
  overflow: hidden;
  width: ${getTrackWidth};
  transform: ${getTransform};
  transition: ${(props) =>
    props.showTransition ? 'transform 0.45s ease-in-out 0s' : 'none'};
`;

const SlidesWrapper = styled.section`
  overflow: hidden;
`;
const SliderElement = styled.section`
  position: relative;
  display: flex;
  .text-size {
    font-size: 1.4rem;
  }
  width: ${getAttributes('carouselWidth')};
`;

Carousel.propTypes = {
  componentData: PropTypes.array.isRequired,
  componentToRender: PropTypes.func.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  mobileArrowHidden: PropTypes.bool,
  tabArrowHidden: PropTypes.bool,
  arrowHidden: PropTypes.bool,
  carouselWidth: PropTypes.string,
  arrowFromTop: PropTypes.string,
  mobileArrowFromTop: PropTypes.string,
  wrapperWidth: PropTypes.string,
  dots: PropTypes.bool,
  insideDots: PropTypes.bool,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  /** Whether the carousel is responsive. Maintaining carousel state for diffrent screen widths is highly expensive.*/
  isResponsive: PropTypes.bool,
  showComponents: PropTypes.bool,
  /** Ignored when isResponsive is false/ not specified, Number of slides to be shown on Tab screens (i.e screens less than 768px wide but more than 480px)  */
  slidesToShowTab: PropTypes.number,
  /** Ignored when isResponsive is false/ not specified, Number of slides to be shown on MObile screens (i.e screens less than 480px wide)  */
  slidesToShowMobile: PropTypes.number,
  defaultTheme: PropTypes.bool,
  infinite: PropTypes.bool,
  moveToIndex: PropTypes.number,
  autoScroll: PropTypes.bool,
  onSlideChange: PropTypes.func,
  autoScrollTimeout: PropTypes.number,
  currentIndex: PropTypes.number,
  scrollableDots: PropTypes.bool,
  isPhotoViewer: PropTypes.bool,
  commonProps: PropTypes.object,
  innerMargin: PropTypes.number,
  slidesToLoad: PropTypes.number,
  getNext: PropTypes.func,
  getPrev: PropTypes.func,
  hideLeftArrow: PropTypes.bool,
  hideRightArrow: PropTypes.bool,
  arrowClassName: PropTypes.string,
  /** Add padding to the arrows to push them inside the carousel */
  arrowInsetPadding: PropTypes.string,
  forceArrowVisible: PropTypes.bool,
  arrowClicked: PropTypes.func,
  activeRedDots: PropTypes.bool,
};

Carousel.defaultProps = {
  height: 'auto',
  carouselWidth: '100%',
  dots: true,
  insideDots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesToShowTab: 1,
  slidesToShowMobile: 1,
  isResponsive: false,
  autoScroll: false,
  onSlideChange: _noop,
  defaultTheme: true,
  infinite: true,
  mobileArrowHidden: false,
  arrowHidden: false,
  tabArrowHidden: false,
  autoScrollTimeout: 3000,
  currentIndex: 0,
  isPhotoViewer: false,
  scrollableDots: false,
  commonProps: {},
  innerMargin: 0,
  loadOnDemand: false,
  slidesToLoad: 0,
  getNext: _noop,
  getPrev: _noop,
  hideLeftArrow: false,
  hideRightArrow: false,
  arrowClassName: 'carousel-arrow',
  arrowInsetPadding: '0',
  forceArrowVisible: false,
  arrowClicked: _noop,
};

export default Carousel;
