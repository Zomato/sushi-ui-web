import styled, { css } from 'styled-components';
import ZImage from '../../../../../ZImage';
import white from '../../../../../tokens/color/white';
import grey from '../../../../../tokens/color/grey';

export const ISDCode = styled.p`
  text-align: right;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
  padding: 0 0 0 0.5rem;
  width: 5rem;
  flex-shrink: 0;
  flex-grow: 0;
  border-left: 0.1rem solid
    ${({ isKeySelected }) => (isKeySelected ? white : grey.z200)};
`;

export const CountryText = styled.p`
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: ${grey.z800};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 14rem;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3rem;
  padding: 0.7rem 0.8rem;
  width: 100%;
  cursor: pointer;
  ${(props) =>
    props.isKeySelected &&
    css`
      background: ${grey.z200};
    `}
  :hover {
    background: ${grey.z200};
  }

  :hover p {
    border-color: ${white};
  }
`;

export const StyledFlag = styled(ZImage)`
  margin-right: 1rem;
`;

export const ImageNameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 18rem;
  flex-shrink: 0;
  flex-grow: 0;
`;
