import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  ImageNameWrapper,
  StyledFlag,
  CountryText,
  ISDCode,
} from './styles';

const NewCountryItem = ({ country, isdCode, flagImgUrl, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <ImageNameWrapper>
        <StyledFlag
          alt={`${country}-flag`}
          height='2rem'
          width='3rem'
          src={flagImgUrl}
          fit='contain'
        />
        <CountryText>{country}</CountryText>
      </ImageNameWrapper>
      <ISDCode isKeySelected={rest.isKeySelected}>+{isdCode}</ISDCode>
    </Wrapper>
  );
};

NewCountryItem.propTypes = {
  country: PropTypes.string.isRequired,
  isdCode: PropTypes.string.isRequired,
  flagImgUrl: PropTypes.string.isRequired,
};

export default NewCountryItem;
