import React, { useState } from 'react';
import OTPbox from '../OTPbox';

const OTPStory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleInputfill = (value) => {
    console.log(value);
    setIsLoading(true);
  };
  const handleOnChange = () => {};
  return (
    <OTPbox
      fnInputFill={handleInputfill}
      length={6}
      onChange={handleOnChange}
      inputType='number'
      loading={isLoading}
      isSecure
    />
  );
};

export { OTPStory };
