import { white } from './color';

const variants = {
  small: {
    size: {
      arrow: 9,
    },
    minWidth: 3.5,
    borderRadius: 0.3,
    padding: '0.2rem',
    minHeight: '2.8rem',
  },
  big: {
    size: {
      arrow: 15,
    },
    padding: '2rem 1rem',
    minWidth: 20,
    borderRadius: 0.6,
  },
};

const appearanceConfigs = {
  dark: {
    bgColor: '#212B36',
    color: white,
    borderColor: '#212B36',
  },
  light: {
    bgColor: white,
    color: '#6F7276',
    borderColor: '#E0E0E0',
  },
};

export { variants, appearanceConfigs };
