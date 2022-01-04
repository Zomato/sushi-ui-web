import { keyframes } from 'styled-components';
const fadeout = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;
export default fadeout;
