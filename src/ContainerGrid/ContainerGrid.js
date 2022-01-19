import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ContainerGrid = (props) => {
  const {
    children = null,
    gridGap = '',
    columns = '',
    mobileColumns = '',
    tabletColumns = '',
  } = props;
  return (
    <ContainerGrid.Wrapper
      {...props}
      columns={getGrid(columns)}
      mobileColumns={getGrid(mobileColumns)}
      tabletColumns={getGrid(tabletColumns)}
      gridGap={gridGap}
    >
      {children}
    </ContainerGrid.Wrapper>
  );
};

const getGrid = (grid) => {
  const sections = grid.trim().split(' ');
  if (!sections.length) return '';
  return sections.map((sec) => sec + 'fr').join(' ');
};

ContainerGrid.propTypes = {
  children: PropTypes.node,
  gridGap: PropTypes.string,
  columns: PropTypes.string,
  mobileColumns: PropTypes.string,
  tabletColumns: PropTypes.string,
};

ContainerGrid.Item = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    !!props.gridColumn &&
    css`
      grid-column: ${props.gridColumn};
    `}
  ${(props) =>
    !!props.tabletGridColumn &&
    css`
      @media (min-width: 481px) and (max-width: 768px) {
        grid-column: ${props.tabletGridColumn};
      }
    `}
  ${(props) =>
    !!props.mobileGridColumn &&
    css`
      @media (max-width: 480px) {
        grid-column: ${props.mobileGridColumn};
      }
    `}
    ${(props) =>
    !!props.gridRow &&
    css`
      grid-row: ${props.gridRow};
    `}
    ${(props) =>
    !!props.tabletGridRow &&
    css`
      @media (min-width: 481px) and (max-width: 768px) {
        grid-row: ${props.tabletGridRow};
      }
    `}
    ${(props) =>
    !!props.mobileGridRow &&
    css`
      @media (max-width: 480px) {
        grid-row: ${props.mobileGridRow};
      }
    `}
    display: flex;
  justify-content: center;
`;

ContainerGrid.Wrapper = styled.section`
  display: grid;
  max-width: 90rem;
  align-items: flex-start;
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    max-width: 76.8rem;
  }
  ${(props) =>
    !!props.gridGap &&
    css`
      grid-gap: ${props.gridGap};
    `}
  grid-template-columns: ${(props) => props.columns}; // TODO
  ${(props) =>
    !!props.mobileColumns &&
    css`
      @media (max-width: 480px) {
        grid-template-columns: ${props.mobileColumns};
      }
    `}
  ${(props) =>
    !!props.tabletColumns &&
    css`
      @media (min-width: 481px) and (max-width: 768px) {
        grid-template-columns: ${props.tabletColumns};
      }
    `}
`;

export default ContainerGrid;
