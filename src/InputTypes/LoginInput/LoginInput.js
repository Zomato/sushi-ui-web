import React, { useEffect, useRef, useState } from 'react';
import CountryISD from './CountryISD';
import _noop from 'lodash-es/noop';
import _get from 'lodash-es/get';
import PropTypes from 'prop-types';

import { Container, Input, InputWrapper, ErrorText } from './styles';
import { defaultCountries, isOldLoginInputVersion } from './helpers';

const getDefaultCountryFlagImgUrl = (countries, defaultIsdCode) => {
  if (
    !defaultIsdCode ||
    !countries ||
    !Array.isArray(countries) ||
    !countries.length
  ) {
    return '';
  }

  const country = countries.find(
    (country) => country.isdCode === String(defaultIsdCode),
  );
  return country && country.flagImgUrl ? country.flagImgUrl : '';
};
const LoginInput = (props) => {
  const {
    width = '',
    placeholder = 'type here...',
    onChange = _noop,
    fnCountryChange = _noop,
    errorText = '',
    defaultIsdCode,
    countries,
    onFocus: onFocusInputProp, // this on focus is for only the input
    isNakedInMobile,
    autoFocusInput,
    ...rest
  } = props;
  const [isd, setIsd] = useState(defaultIsdCode);
  const [countryFlagImgUrl, setCountryFlagImgUrl] = useState(
    getDefaultCountryFlagImgUrl(countries, defaultIsdCode),
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleCountry = (country) => {
    if (isOldLoginInputVersion(countries)) {
      setIsd(countries[country]);
      setCountryFlagImgUrl(_get(country, 'flagImgUrl', ''));
      fnCountryChange(countries[country]);
    } else {
      const isdCode = _get(country, 'isdCode', '');
      setIsd(isdCode);
      setCountryFlagImgUrl(_get(country, 'flagImgUrl', ''));
      fnCountryChange(country);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value || '';
    onChange(value, e);
  };
  const inputRef = useRef();
  const handleClick = () =>
    inputRef && inputRef.current && inputRef.current.focus();

  useEffect(() => {
    if (autoFocusInput) {
      handleClick();
    }
  }, [autoFocusInput, inputRef]);

  const inputFocusHandler = (event) => {
    onFocusInputProp(event);
    setShowMenu(false);
  };

  return (
    <>
      <Container width={width} {...rest}>
        <InputWrapper
          isNakedInMobile={isNakedInMobile}
          onClick={handleClick}
          isError={errorText}
        >
          <CountryISD
            countryFlagImgUrl={countryFlagImgUrl}
            code={isd}
            selectCountry={handleCountry}
            countries={countries}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            focusOnInput={handleClick}
          />
          <Input
            {...props}
            ref={inputRef}
            placeholder={placeholder}
            onChange={handleChange}
            isError={errorText}
            onFocus={inputFocusHandler}
          />
        </InputWrapper>
      </Container>
      {<ErrorText isError={errorText}>{errorText}</ErrorText>}
    </>
  );
};

LoginInput.propTypes = {
  autoFocusInput: PropTypes.bool,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  fnCountryChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  errorText: PropTypes.string,
  defaultIsdCode: PropTypes.number,
  /**
   * Countries can be a mapping of countryNames and ISD codes
   * or an array of different country data as follows
   * [
   * {
        countryId: string,
        name: string,
        isdCode: string,
        flagImgUrl: string
      }
   * ]
   */
  countries: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(
      PropTypes.shape({
        countryId: PropTypes.string,
        name: PropTypes.string,
        isdCode: PropTypes.string,
        flagImgUrl: PropTypes.string,
      }),
    ),
  ]),
  onFocus: PropTypes.func,
  isNakedInMobile: PropTypes.bool,
};

LoginInput.defaultProps = {
  countries: defaultCountries,
  defaultIsdCode: 91,
  onFocus: _noop,
  isNakedInMobile: false,
  autoFocusInput: false,
};

export default LoginInput;
