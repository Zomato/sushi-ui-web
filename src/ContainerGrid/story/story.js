import styled from 'styled-components';
import { blue } from '../../tokens/color';

const Box = styled.div`
  border: 2px solid ${blue.z500};
  min-width: 20rem;
  min-height: 20rem;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${blue.z500};
  justify-content: center;
`;

export { Box };
