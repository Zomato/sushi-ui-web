import { keyframes, css } from 'styled-components';

const noShake = css`
  transform: translate3d(0, 0, 0);
`;

const upShake = css`
  transform: translate3d('10px', 0, 0);
`;

const downShake = css`
  transform: translate3d('-10px', 0, 0);
`;
const shake = keyframes`
  from{${noShake}}
  10%{${downShake}}
  20%{${upShake}}
  30%{${downShake}}
  40%{${upShake}}
  50%{${downShake}}
  60%{${upShake}}
  70%{${downShake}}
  80%{${upShake}}
  90%{${downShake}}
  to{${noShake}}
`;

export default shake;
