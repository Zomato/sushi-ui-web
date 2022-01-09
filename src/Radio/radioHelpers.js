import { radioLabel as radioLabelColor } from '../tokens/colors';

const getRadioAttributes = (props) => {
  const cursorObj = {
    cursor: 'pointer',
  };

  if (props.disabled) {
    return {
      ...radioLabelColor.disabled,
      cursor: 'not-allowed',
    };
  }
  if (props.checked) {
    return {
      ...radioLabelColor.checked(props),
      ...cursorObj,
    };
  }

  return {
    ...radioLabelColor.default(props),
    ...cursorObj,
  };
};

const getAttributes = (key) => (props) => getRadioAttributes(props)[key];

export { getAttributes };
