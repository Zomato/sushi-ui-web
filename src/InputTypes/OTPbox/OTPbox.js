import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cloneChildren } from '../../helpers/commonHelper';
import Spinner from '../../Spinner';
import red from '../../tokens/color/red';
import grey from '../../tokens/color/grey';
import coal from '../../tokens/color/black';
const OTPbox = (props) => {
  const { length, fnInputFill, onChange, alignInput, inputType, loading } =
    props;

  const [isFocused, setFocused] = useState(0);
  const [inputValue, setValue] = useState({});

  const handleOnchange = (e, inputIndex) => {
    onChange(e);
    let inputCurrentValue = e.target.value || '';
    if (!inputCurrentValue || !isAlphaNum(inputCurrentValue)) {
      return;
    }

    let splitText = inputCurrentValue.split('');
    const valueArr = splitText.splice(0, length - inputIndex);
    const updatedInputValue = valueArr.reduce(
      (result, key, idx) => ({
        ...result,
        [inputIndex + idx]: key,
      }),
      {},
    );
    const newValue = { ...inputValue, ...updatedInputValue };
    let lastIndex = inputIndex + valueArr.length;
    if (lastIndex >= length) {
      lastIndex = length - 1;
    }

    setValue(newValue);
    setFocused(lastIndex);
    const otpValueLength = Object.values(newValue).length;
    if (otpValueLength === length) {
      const otpValue = Object.values(newValue).join('');
      fnInputFill(otpValue);
    }
  };

  const isAlphaNum = (str) => {
    return /^[a-zA-Z0-9]+$/.test(str);
  };

  const handleInputKeyDown = (index) => (e) => {
    onChange(e);

    switch (e.keyCode) {
      case 8: // backspace
        setFocused(index - 1);
        // eslint-disable-next-line no-case-declarations
        const newValue = { ...inputValue };
        delete newValue[index];
        setValue(newValue);
        break;

      case 39: //right arrows
        setFocused(index + 1);
        break;
      case 37: // left arrow
        setFocused(index - 1);
        break;
    }
  };

  return (
    <Holder>
      <OTPbox.Wrapper alignInput={alignInput}>
        <OTPbox.Container length={length}>
          {getInputs(
            isFocused,
            length,
            <Input
              {...props}
              inputType={inputType}
              onChange={handleOnchange}
              setFocus={setFocused}
              handleKeyDown={handleInputKeyDown}
              disabled={loading}
            />,
            inputValue,
          )}
        </OTPbox.Container>
      </OTPbox.Wrapper>
      {loading && <Spinner color={red.z500} />}
    </Holder>
  );
};

const Holder = styled.div`
  text-align: center;
`;

const Input = (props) => {
  const {
    isFocused = false,
    onChange,
    index,
    setFocus,
    handleKeyDown,
    inputType,
    isSecure,
  } = props;
  const handleFocus = (index) => () => setFocus(index);
  const handleOnchange = (index) => (e) => onChange(e, index);
  const ref = useRef();
  useEffect(() => {
    if (ref.current && isFocused) {
      ref.current.focus();
    }
  }, [isFocused]);

  const specialInputProps = {
    pattern: inputType === 'number' ? '[0-9]{1}' : '[a-zA-Z0-9]{1}',
    inputMode: inputType === 'number' ? 'numeric' : 'text',
    type: inputType === 'number' ? 'number' : 'text',
  };

  return (
    <Input.El
      {...props}
      ref={ref}
      onChange={handleOnchange(index)}
      maxLength={2}
      onClick={handleFocus(index)}
      onKeyDown={handleKeyDown(index)}
      {...specialInputProps}
      type={isSecure ? 'password' : specialInputProps.type}
    />
  );
};

Input.propTypes = {
  isFocused: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setFocus: PropTypes.func.isRequired,
  onPaste: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  inputType: PropTypes.string,
  isSecure: PropTypes.bool,
};

const getInputs = (focused, length, component, values) => {
  const inputs = [];
  for (let i = 0; i < length; i++) {
    const isFocused = i == focused;
    inputs.push(
      cloneChildren(component, { index: i, isFocused, value: values[i] || '' }),
    );
  }
  return inputs;
};

OTPbox.propTypes = {
  length: PropTypes.number,
  fnInputFill: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  alignInput: PropTypes.oneOf(['left', 'right', 'center']),
  inputType: PropTypes.oneOf(['text', 'number']),
  loading: PropTypes.bool,
  isSecure: PropTypes.bool,
};

OTPbox.defaultProps = {
  length: 1,
  alignInput: 'center',
  inputType: 'text',
  loading: false,
  isSecure: false,
};

Input.El = styled.input`
  -webkit-appearance: none;
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  height: 4.8rem;
  width: 5.6rem;
  border: 1px solid #cfcfcf;
  border-radius: 0.8rem;
  padding: 0;
  text-align: center;
  font-size: 1.6rem;
  color: ${(props) => (props.disabled ? grey.z300 : coal)};
  @media (max-width: 480px) {
    width: 4.8rem;
    padding: 0;
  }
  :focus {
    border: 1px solid #009999;
  }
`;

OTPbox.Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) =>
    props.length
      ? `calc((${props.length} * 5.6rem) + ((${props.length} - 1) * 1.3rem))`
      : 'auto'};

  @media (max-width: 480px) {
    width: ${(props) =>
      props.length
        ? `calc((${props.length} * 4.8rem) + ((${props.length} - 1) * 1rem))`
        : 'auto'};
  }
`;

const alignEnum = (alignProp) => {
  switch (alignProp) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
};

OTPbox.Wrapper = styled.div`
  display: flex;
  justify-content: ${({ alignInput }) => alignEnum(alignInput)};
`;

export default OTPbox;
