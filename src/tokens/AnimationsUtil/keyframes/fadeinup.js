import { keyframes } from 'styled-components';
const fadeinup = keyframes`
  from {
    opacity: 0;
    transform: translateY(10em);
    visibility: hidden;
  }
  to {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;
export default fadeinup;
