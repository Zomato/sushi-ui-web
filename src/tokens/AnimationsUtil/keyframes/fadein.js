import { keyframes } from 'styled-components';
const fadein = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

export default fadein;
