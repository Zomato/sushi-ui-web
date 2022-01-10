import { keyframes } from 'styled-components';

const popout = keyframes`
  0% {
    opacity: 1;
    transform: none;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`;
export default popout;
