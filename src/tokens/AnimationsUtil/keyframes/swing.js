import { keyframes } from 'styled-components';

const swing = keyframes`
   20%{
    transform: rotate3d(0, 0, 1, 15)
  },
  40%{
    transform: rotate3d(0, 0, 1, -10)
  },
  60%{
    transform: rotate3d(0, 0, 1, 5)
  },
  80%{
    transform: rotate3d(0, 0, 1, -5)
  },
  to {
   transform: rotate3d(0, 0, 1, 15)
  }

`;

export default swing;
