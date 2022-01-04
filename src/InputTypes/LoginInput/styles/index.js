import styled, { css } from 'styled-components';
import white from '../../../tokens/color/white';

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  color: #1c1c1c;
  font-size: 1.8rem;
  &::placeholder {
    color: #b5b5b5;
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

export const noBorder = css`
  border: 0;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 4.8rem;
  padding: ${(props) => (props.isError ? '0.7rem' : '0.8rem')};
  font-size: 1.6rem;
  align-items: center;
  border: ${(props) =>
    props.isError ? '2px solid #d64155' : '1px solid #cfcfcf'};
  border-radius: 6px;
  :focus-within {
    border: ${(props) =>
      props.isError ? '2px solid #d64155' : '2px solid #009999'};
    padding: 0.7rem;
  }

  @media (max-width: 480px) {
    ${({ isNakedInMobile }) => isNakedInMobile && noBorder};
    :focus-within {
      ${({ isNakedInMobile }) => isNakedInMobile && noBorder}
    }
  }
`;

export const Container = styled.div`
  width: ${(props) => (props.width ? props.width : 'auto')};
  background: ${white};
`;

export const ErrorText = styled.p`
  height: 13px;
  color: #d64155;
  visibility: ${(props) => (props.isError ? 'visible' : 'hidden')};
  font-size: 1.1rem;
  line-height: 1.3rem;
  margin: 0.2rem 0 0 0;
`;
