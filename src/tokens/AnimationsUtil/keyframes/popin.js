import { keyframes } from 'styled-components';

const popin = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;
export default popin;
