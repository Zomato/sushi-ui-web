// libraries
import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash-es/noop';
import styled from 'styled-components';

// components
import Radio from '../Radio';

// helpers
import { getAttributes } from './radiogroupHelpers';

const RadioGroup = (props) => {
  const onChange = (e) => {
    e.stopPropagation();
    props.onChange(e.target.value);
  };
  //TODO:add a fieldset and legend for every radio group for accessebility
  return (
    <RadioGroup.Element {...props} horizontal={props.horizontal}>
      {props.options.map(({ label, value, disabled }, index) => (
        <Radio
          key={`${value}_${index}`}
          name={props.name}
          value={value}
          label={label}
          checked={value === props.selected}
          disabled={!!disabled}
          onChange={onChange}
          marginBottom={props.marginBottom}
          selectedColor={props.selectedColor}
          textColor={props.textColor}
        />
      ))}
    </RadioGroup.Element>
  );
};

RadioGroup.Element = styled.section`
  display: ${getAttributes('display')};
  justify-content: ${getAttributes('justifyContent')};
`;

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  horizontal: PropTypes.bool,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
  marginBottom: PropTypes.string,
  selectedColor: PropTypes.string,
  textColor: PropTypes.string,
};

RadioGroup.defaultProps = {
  onChange: _noop,
  horizontal: false,
};

export default RadioGroup;
