import React, { useState } from 'react';
import Input from '../Input';

const InputWrapper = (props) => {
  // eslint-disable-next-line react/prop-types
  const [value, changeValue] = useState(props.value);

  return <Input {...props} onChange={changeValue} value={value} />;
};

export { InputWrapper };
