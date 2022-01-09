import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _noop from 'lodash-es/noop';
import {
  grey,
  black,
  white,
  red,
  green,
  blue,
  yellow,
  purple,
  indigo,
  brown,
  teal,
  orange,
  pink,
  lime,
  cider,
} from '../color';

const Wrapper = styled.div`
  padding: 1em;
`;

const H1 = styled.h1`
  color: ${grey.z800};
  font-size: 1.5em;
`;

const SectionHolder = styled.section`
  border-radius: 4px;
  width: 100%;
`;

const ColorPalette = (props) => (
  <Wrapper>
    <H1>{props.heading}</H1>
    <SectionHolder>
      {props.colors.map((color) => (
        <ColorSection
          key={color.color}
          showColor={color.color}
          showName={color.name}
          showVariant={color.variant}
          colors={color.offsets}
        />
      ))}
    </SectionHolder>
  </Wrapper>
);

ColorPalette.propTypes = {
  heading: PropTypes.string,
  colors: PropTypes.array,
};

ColorPalette.defautProps = {
  heading: '',
  colors: _noop,
};

const ColorSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;
const CommonSectionWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: flex-end;
  background-color: ${(props) => props.color};
  border: ${(props) =>
    props.color == white ? '1px solid ' + grey.z400 : 'none'};
`;
const AllColorSectionWrapper = styled.div`
  width: 88%;
  margin-left: 1em;
  display: flex;
`;
const SectionInfo = styled.div`
  display: flex;
  margin: 0.5em;
  flex-direction: column;
  align-items: flex-start;
`;
const InfoSpan = styled.span`
  font-size: ${(props) => (props.type == 'small' ? '10px' : '14px')};
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0.1em 0;
  margin-top: ${(props) => (props.type == 'small' ? '0.2em' : '0.1em')};
`;
const NameSpan = styled.span`
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  font-size: 18px;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const AllColorSection = (props) => (
  <AllColorSectionWrapper>
    {Object.keys(props.colors).map(
      (c) =>
        c != 'rgb' &&
        c != 'hsl' && (
          <CommonSection key={c} color={props.colors[c]} name='' variant={c} />
        ),
    )}
  </AllColorSectionWrapper>
);

AllColorSection.propTypes = {
  colors: PropTypes.array,
};

AllColorSection.defaultProps = {
  colors: [],
};

const CommonSection = (props) => (
  <CommonSectionWrapper color={props.color}>
    <SectionInfo>
      {!!props.name && <NameSpan type='name'>{props.name}</NameSpan>}
      <InfoSpan>{props.variant}</InfoSpan>
      <InfoSpan type='small'> {props.color}</InfoSpan>
    </SectionInfo>
  </CommonSectionWrapper>
);

CommonSection.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.string,
};

const ColorSection = (props) => (
  <ColorSectionWrapper>
    <CommonSection
      color={props.showColor}
      name={props.showName}
      variant={props.showVariant}
    />
    {!!Object.keys(props.colors).length && (
      <AllColorSection name={props.showName} colors={props.colors} />
    )}
  </ColorSectionWrapper>
);

ColorSection.propTypes = {
  showColor: PropTypes.string,
  showName: PropTypes.string,
  showVariant: PropTypes.string,
  colors: PropTypes.array,
};

const allColors = [
  {
    name: 'Black',
    color: black,
    variant: '000',
    offsets: {},
  },
  {
    name: 'White',
    color: white,
    variant: '000',
    offsets: {},
  },
  {
    name: 'Grey',
    color: grey.z500,
    variant: 'z500',
    offsets: grey,
  },
  {
    name: 'Red',
    color: red.z500,
    variant: 'z500',
    offsets: red,
  },
  {
    name: 'Green',
    color: green.z500,
    variant: 'z500',
    offsets: green,
  },
  {
    name: 'Blue',
    color: blue.z500,
    variant: 'z500',
    offsets: blue,
  },
  {
    name: 'Yellow',
    color: yellow.z500,
    variant: 'z500',
    offsets: yellow,
  },
  {
    name: 'Purple',
    color: purple.z500,
    variant: 'z500',
    offsets: purple,
  },
];

const PrimaryColorsContainer = () => (
  <ColorPalette colors={allColors} heading='Primary Colors' />
);

const secondaryColors = [
  {
    name: 'Indigo',
    color: indigo.z500,
    variant: 'z500',
    offsets: indigo,
  },
  {
    name: 'Brown',
    color: brown.z500,
    variant: 'z500',
    offsets: brown,
  },
  {
    name: 'Teal',
    color: teal.z500,
    variant: 'z500',
    offsets: teal,
  },
  {
    name: 'Orange',
    color: orange.z500,
    variant: 'z500',
    offsets: orange,
  },
  {
    name: 'Pink',
    color: pink.z500,
    variant: 'z500',
    offsets: pink,
  },
  {
    name: 'Lime',
    color: lime.z500,
    variant: 'z500',
    offsets: lime,
  },
  {
    name: 'Cider',
    color: cider.z500,
    variant: 'z500',
    offsets: cider,
  },
];

const SecondaryColorsContainer = () => (
  <ColorPalette colors={secondaryColors} heading='Secondary Colors' />
);

export { PrimaryColorsContainer, SecondaryColorsContainer };
