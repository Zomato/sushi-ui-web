import React, { useState, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash-es/noop';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

// sushi
import Cross from '../../Icons/all/Cross';
import Spinner from '../../Spinner/Spinner';

// helpers
import {
  getValue,
  getTextWidth,
  getActiveColors,
  getInertColors,
  getLoaderProps,
} from './helper';

const Chips = React.forwardRef(
  (
    {
      list,
      onAdd,
      gap,
      helperText,
      errorText,
      label,
      validator,
      hideCross,
      padding,
      minHeight,
      maxWidth,
      activeColors,
      inertColors,
      disabled,
      bgColor,
      loading,
      loaderProps,
      hideLabel,
      triggerKeys,
      useBackSpace,
      onRemove,
      onChange,
    },
    ref,
  ) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [inputWidth, setInputWidth] = useState(0);
    const [focused, setFocused] = useState(false);
    const inputRef = useRef({ value: '' });

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      },
      value: inputRef.current.value,
    }));

    // get updated values
    const updatedActiveColors = getActiveColors(activeColors);
    const updatedInertColors = getInertColors(inertColors);
    const updatedLoaderProps = getLoaderProps(loaderProps);

    const wrapperClick = (e) => {
      e.preventDefault();
      if (typeof inputRef.current.focus === 'function')
        inputRef.current.focus();
    };

    const handleBlur = () => {
      setFocused(false);
    };
    const handleFocus = () => {
      setFocused(true);
    };

    const handleRemove = (index, item) => (e) => {
      e.preventDefault();
      onRemove(index, item);
    };

    const handleKeyDown = (e) => {
      if (triggerKeys.includes(e.key)) {
        e.preventDefault();
        const item = value.trim();
        if (item && isValid(item)) {
          onAdd(item);
          setValue('');
          setInputWidth(0);
        }
      } else if (
        e.key === 'Backspace' &&
        inputRef.current.value.length === 0 &&
        useBackSpace
      ) {
        const lastItemIndex = list.length - 1;
        const lastItem = list[lastItemIndex];

        onRemove(lastItemIndex, lastItem);
      }
    };

    const handleInputWidth = (width) => {
      setInputWidth(width);
    };

    const handleChange = (e) => {
      const text = e.target.value;
      const calculatedWidth = getTextWidth(
        text,
        getComputedStyle(e.target).font,
      );
      setValue(text);
      setError('');
      onChange(text);
      handleInputWidth(calculatedWidth);
    };

    const isValid = (input) => {
      if (!validator(input)) {
        setError(errorText);
        return false;
      }
      return true;
    };

    return (
      <ThemeProvider
        theme={{
          error: error !== '',
          input: inputRef.current.value || list.length,
          activeColors: updatedActiveColors,
          inertColors: updatedInertColors,
          loaderProps: updatedLoaderProps,
          focused,
          padding,
          disabled,
          minHeight,
          maxWidth,
          loading,
          hideLabel,
          bgColor,
        }}
      >
        <Chips.Container gap={gap}>
          <Chips.Wrapper onMouseDown={wrapperClick}>
            {!hideLabel && <Chips.Label>{label}</Chips.Label>}
            {loading && (
              <Chips.LoaderWrapper>
                <Spinner {...updatedLoaderProps} />
              </Chips.LoaderWrapper>
            )}
            {!loading &&
              list.map((item, index) => {
                return (
                  <Chips.Chip key={item}>
                    <span>{item}</span>
                    {hideCross ||
                      (!disabled && (
                        <Cross
                          onMouseDown={handleRemove(index, item)}
                          color={
                            focused
                              ? updatedActiveColors.chipCross
                              : updatedInertColors.chipCross
                          }
                          style={{ cursor: 'pointer' }}
                        />
                      ))}
                  </Chips.Chip>
                );
              })}
            {!loading && !disabled && (
              <Chips.Input
                ref={inputRef}
                width={inputWidth}
                value={value}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                disabled={disabled}
              />
            )}
          </Chips.Wrapper>
          <Chips.ErrorText>
            {error !== '' ? errorText : helperText}
          </Chips.ErrorText>
        </Chips.Container>
      </ThemeProvider>
    );
  },
);

Chips.Container = styled.div`
  margin-top: ${(props) => props.gap};
  margin-bottom: ${(props) => props.gap};
`;

Chips.Label = styled.span`
  user-select: none;
  font-size: 1.8rem;
  position: absolute;
  transition: all 0.2s ease;
  transition-property: top, left;
  left: calc(1.2rem + ${getValue('padding')});
  top: calc(1.6rem + ${getValue('padding')});
  background: ${getValue('bgColor')};
  color: ${getValue('labelFont')};
  ${getValue('moveLabel')}; // inserts css to move lable text
`;

Chips.Wrapper = styled.div`
  transition: all 0.2s ease;
  position: relative;
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid;
  border-radius: 1rem;
  padding: calc(${getValue('padding')} + 1rem);
  border-color: ${getValue('borderColor')};
  min-height: ${getValue('minHeight')};
  max-width: ${getValue('maxWidth')};
  background: ${getValue('bgColor')};
`;

Chips.Input = styled.input`
  transition: color 0.2s ease;
  padding: 0.8rem 0;
  border: none;
  width: calc(${(props) => props.width}px + 1rem);
  color: ${getValue('color')};
  background: ${getValue('bgColor')};
  &:disabled {
    background: rgba(0, 0, 0, 0);
  }
`;

Chips.ErrorText = styled.div`
  font-size: 1.1rem;
  height: 1rem;
  color: ${getValue('helperTxtColor')};
`;

Chips.Chip = styled.span`
  transition: all 0.2s ease;
  transition-property: background, color;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5rem;
  border: 1px solid;
  border-radius: 0.4rem;
  border-color: ${getValue('chipBorder')};
  background: ${getValue('chipBg')};
  color: ${getValue('chipFont')};
  span {
    font-size: 1.8rem;
    margin: 0 0.5rem;
  }
`;

Chips.LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - calc(1.2em + calc(${getValue('padding')} * 2)));
  text-align: ${getValue('loaderAlign')};
`;

Chips.propTypes = {
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
  validator: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  hideLabel: PropTypes.bool,
  useBackSpace: PropTypes.bool,
  hideCross: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.string),
  triggerKeys: PropTypes.arrayOf(PropTypes.string),
  gap: PropTypes.string,
  padding: PropTypes.string,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
  label: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  bgColor: PropTypes.string,
  loaderProps: PropTypes.shape({
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right']),
  }),
  activeColors: PropTypes.objectOf(PropTypes.string),
  inertColors: PropTypes.objectOf(PropTypes.string),
};

Chips.defaultProps = {
  validator: () => true,
  onAdd: _noop,
  onRemove: _noop,
  onChange: _noop,
  disabled: false,
  hideCross: false,
  loading: false,
  useBackSpace: false,
  hideLabel: false,
  list: [],
  triggerKeys: ['Enter', 'Tab', ',', ' '],
  gap: '0',
  helperText: '',
  errorText: '',
  label: '',
  maxWidth: '',
  minHeight: '5.8rem',
  bgColor: 'white',
  padding: '0rem',
};
export default Chips;
