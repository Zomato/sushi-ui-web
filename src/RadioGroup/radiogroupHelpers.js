import { radioViewDisplay } from '../tokens/sizes';

const getAttr = (props) => {
  if (props.horizontal) {
    return {
      ...radioViewDisplay.horizontal,
      justifyContent: 'space-between',
    };
  }

  return {
    ...radioViewDisplay.default,
    justifyContent: 'space-around',
  };
};

const getAttributes = (key) => (props) => getAttr(props)[key];

export { getAttributes };
