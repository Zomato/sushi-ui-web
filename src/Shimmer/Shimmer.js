import styled, { keyframes } from 'styled-components';
import grey from '../tokens/color/grey';
import white from '../tokens/color/white';

const shimmerAnimation = keyframes`
  0% { background-position: -80vw 0; }
  100% { background-position: 80vw 0; }
`;

const Shimmer = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  border-radius: ${(props) => (props.isCircle ? '50%' : '0')};
  background: ${grey.z95};
  background-image: linear-gradient(
    to right,
    ${grey.z95} 0%,
    ${white} 10%,
    ${grey.z95} 40%,
    ${grey.z95} 100%
  );
  background-repeat: no-repeat;
  transition: opacity 0.5s ease-out;
  animation: ${shimmerAnimation} 1.5s infinite linear forwards;
`;

export default Shimmer;
