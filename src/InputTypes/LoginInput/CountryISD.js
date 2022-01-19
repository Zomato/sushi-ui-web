import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import OnClickOutSide from '../../HOC/OnClickOutside';
import ChevronDown from '../../Icons/all/ChevronDown';
import grey from '../../tokens/color/grey';
import { onKeyChoose } from '../../helpers/commonHelper';
import { isOldLoginInputVersion } from './helpers';

import NewCountryItem from './components/NewCountryItem';
import ZImage from '../../ZImage';

const CountryISD = ({
  code,
  countries,
  selectCountry,
  showMenu,
  setShowMenu,
  focusOnInput,
  countryFlagImgUrl,
}) => {
  const [selectedChild, setSelectedChild] = useState(0);

  const closeMenu = () => {
    setShowMenu(false);
    setSelectedChild(0);
  };
  const openMenu = () => setShowMenu(true);
  const toggleMenu = () => setShowMenu(!showMenu);
  const handleCountrySelect = (country) => () => {
    selectCountry(country);
    closeMenu();
    focusOnInput();
  };

  const countryLength = isOldLoginInputVersion(countries)
    ? Object.keys(countries).length
    : countries.length;

  const resultWrapperRef = useRef();

  const handleMenuScrolling = (direction) => {
    if (resultWrapperRef.current && countryLength) {
      const {
        scrollHeight = 0,
        scrollTop = 0,
        clientHeight = 0,
      } = resultWrapperRef.current;
      const itemHeight = scrollHeight / countryLength;
      const currentPosition = (selectedChild + 1) * itemHeight;

      if (direction === 'up') {
        if (currentPosition > clientHeight)
          resultWrapperRef.current.scrollTop = scrollTop - itemHeight;
      } else {
        if (currentPosition > clientHeight)
          resultWrapperRef.current.scrollTop = scrollTop + itemHeight;
      }
    }
  };
  const handleItemSelect = (e, key) => {
    e.preventDefault();
    if (showMenu && countryLength) {
      const handleUpKeyPress = () => {
        if (!selectedChild) {
          setSelectedChild(1);
        } else {
          if (selectedChild !== 1) setSelectedChild(selectedChild - 1);
        }
        handleMenuScrolling('up');
      };

      const handleDownKeyPress = () => {
        if (!selectedChild) setSelectedChild(1);
        if (selectedChild !== countryLength)
          setSelectedChild(selectedChild + 1);
        handleMenuScrolling('down');
      };

      const handleEnterKeyPress = () => {
        if (selectedChild) {
          if (isOldLoginInputVersion(countries)) {
            const countryname = Object.keys(countries)[selectedChild - 1];
            selectCountry(countryname);
          } else {
            const countryData = countries[selectedChild - 1];
            selectCountry(countryData);
          }
          setSelectedChild(0);
          closeMenu();
          focusOnInput();
        }
      };

      switch (key) {
        case 'UP':
          handleUpKeyPress();
          break;
        case 'DOWN':
          handleDownKeyPress();
          break;
        case 'ENTER':
          handleEnterKeyPress();
          break;
      }
    }
  };

  const suppressClick = (e) => e.stopPropagation();

  const menuItems =
    isOldLoginInputVersion(countries) && countries
      ? Object.keys(countries).map((cntry, i) => (
          <ListCountryItem
            key={cntry}
            country={cntry}
            code={countries[cntry]}
            onClick={handleCountrySelect(cntry)}
            isKeySelected={i === selectedChild - 1}
          />
        ))
      : countries.map((countryData, i) => (
          <NewCountryItem
            key={countryData.countryId}
            country={countryData.name}
            isdCode={countryData.isdCode}
            flagImgUrl={countryData.flagImgUrl}
            onClick={handleCountrySelect(countryData)}
            isKeySelected={i === selectedChild - 1}
          />
        ));

  return (
    <OnClickOutSide handleClickOutside={closeMenu}>
      <CountryISD.Wrapper
        onKeyDown={onKeyChoose(handleItemSelect)}
        tabIndex='0'
        onFocus={openMenu}
        onClick={suppressClick}
      >
        <CountryISD.Head onMouseDown={toggleMenu}>
          <CountryItem countryFlag={countryFlagImgUrl} code={code} />
          <DownArrow size={16} menuOpen={showMenu} />
          <VL />
        </CountryISD.Head>
        {showMenu && (
          <CountryISD.Menu
            isNewVersion={!isOldLoginInputVersion(countries)}
            ref={resultWrapperRef}
          >
            {menuItems}
          </CountryISD.Menu>
        )}
      </CountryISD.Wrapper>
    </OnClickOutSide>
  );
};

const StyledFlag = styled(ZImage)`
  margin-right: 0.5rem;
`;

const CountryItem = (props) => {
  const { code, countryFlag } = props;
  return (
    <CountryItem.Wrapper {...props}>
      {countryFlag && (
        <StyledFlag
          alt='flag'
          height='2rem'
          width='2.3rem'
          src={countryFlag}
          fit='contain'
        />
      )}
      <CountryISD.ISD>+{code}</CountryISD.ISD>
    </CountryItem.Wrapper>
  );
};

CountryItem.Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 3rem;
`;

CountryItem.propTypes = {
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const ListCountryItem = styled(CountryItem)`
  width: 100%;
  padding: 0 0.8rem;
  cursor: pointer;
  text-align: right;
  justify-content: space-between;
  ${(props) =>
    props.isKeySelected &&
    css`
      background: ${grey.z200};
    `}
  :hover {
    background: ${grey.z200};
  }
`;

const DownArrow = styled(ChevronDown)`
  margin: 0.4rem 0 0 0.2rem;
  transition: 0.2s ease transform;
  transform: rotate(${(props) => (props.menuOpen ? `180deg` : 0)});
`;

const VL = styled.span`
  width: 0;
  height: 2.4rem;
  border-right: 1px solid #cfcfcf;
  margin-left: 1rem;
`;

CountryISD.propTypes = {
  ...CountryItem.propTypes,
  countries: PropTypes.object,
  selectCountry: PropTypes.func.isRequired,
};
CountryISD.defaultProps = {
  countries: null,
};

CountryISD.Head = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

CountryISD.Menu = styled.div`
  position: absolute;
  top: 4rem;
  padding: 0.8rem 0;
  width: ${({ isNewVersion }) =>
    isNewVersion ? '25rem' : `calc(100% + 0.8rem)`};
  margin-left: -0.8rem;
  max-height: 20rem;
  background: #fff;
  overflow-y: auto;
  border-radius: 6px;
  box-shadow: 0px 2px 8px rgba(28, 28, 28, 0.15);
  z-index: 10;
  user-select: none;
  background: #fff;
`;

CountryISD.Wrapper = styled.div`
  margin-right: 1rem;
  position: relative;
`;

CountryISD.ISD = styled.span`
  font-size: 1.6rem;
  color: #1c1c1c;
  min-width: 4rem;
  text-align: right;
`;

export default CountryISD;
