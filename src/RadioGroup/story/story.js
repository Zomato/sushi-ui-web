import React, { useState } from 'react';
import RadioGroup from '../RadioGroup';

const options = [
  {
    label: 'Spicy',
    value: 'opt_1',
  },
  {
    label: 'Mild',
    value: 'opt_2',
  },
  {
    label: 'Bland',
    value: 'opt_3',
  },
];

const disabledOptions = [
  {
    label: 'Disabled Option 1',
    value: 'opt_1',
    disabled: true,
  },
  {
    label: 'Disabled Option 2',
    value: 'opt_2',
    disabled: true,
  },
  {
    label: 'Disabled, Selected Option',
    value: 'opt_3',
    disabled: true,
  },
];

const RadioGrpWrapper = (props) => {
  // eslint-disable-next-line react/prop-types
  const [selected, setSelected] = useState(props.defaultValue);

  const onChange = (val) => {
    setSelected(val);
  };
  return <RadioGroup {...props} selected={selected} onChange={onChange} />;
};

export { RadioGrpWrapper, options, disabledOptions };
