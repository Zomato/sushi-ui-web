import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { cloneChildren } from '../helpers/commonHelper';

const MAX_SEG_COUNT = 12;

const Layout = (props) => {
  const newChildren = [];
  const { children = null, gap = 0 } = props;
  if (children && children.length && gap) {
    let colsD = 0;
    let colsT = 0;
    let colsM = 0;

    // array holding all the rows
    const rowsD = [];
    const rowsT = [];
    const rowsM = [];

    // individual row holding children
    let arrayD = [];
    let arrayT = [];
    let arrayM = [];

    children.forEach((ch) => {
      if (ch && ch.props) {
        const { props: { colD = 0, colT = 0, colM = 0 } = {} } = ch;

        colsD += colD;
        colsT += colT;
        colsM += colM;

        // make rows according to columns for diff screens
        if (colsD == 12) {
          arrayD.push(ch);
          rowsD.push(arrayD);
          colsD = 0;
          arrayD = [];
        } else if (colsD > 12) {
          rowsD.push(arrayD);
          arrayD = [ch];
          colsD = colD;
        } else {
          arrayD.push(ch);
        }

        if (colsT == 12) {
          arrayT.push(ch);
          rowsT.push(arrayT);
          colsT = 0;
          arrayT = [];
        } else if (colsT > 12) {
          rowsT.push(arrayT);
          arrayT = [ch];
          colsT = colT;
        } else {
          arrayT.push(ch);
        }

        if (colsM == 12) {
          arrayM.push(ch);
          rowsM.push(arrayM);
          colsM = 0;
          arrayM = [];
        } else if (colsM > 12) {
          rowsM.push(arrayM);
          arrayM = [ch];
          colsM = colM;
        } else {
          arrayM.push(ch);
        }
      }
    });

    // push child if remains
    if (arrayD.length) {
      arrayD.isPartialyFill = true;
      rowsD.push(arrayD);
    }
    if (arrayT.length) {
      arrayT.isPartialyFill = true;
      rowsT.push(arrayT);
    }
    if (arrayM.length) {
      arrayT.isPartialyFill = true;
      rowsM.push(arrayM);
    }

    // add padding in every row
    const paddedD = addPadding(rowsD, gap);
    const paddedT = addPadding(rowsT, gap);
    const paddedM = addPadding(rowsM, gap);

    let id = 1;
    rowsD.forEach((row) => {
      row.forEach((ch) => {
        newChildren.push(
          cloneChildren(ch, {
            leftGapD: paddedD[id].leftGap,
            rightGapD: paddedD[id].rightGap,
            leftGapT: paddedT[id].leftGap,
            rightGapT: paddedT[id].rightGap,
            leftGapM: paddedM[id].leftGap,
            rightGapM: paddedM[id].rightGap,
            gap,
          }),
        );
        id++;
      });
    });
  }

  return (
    <Layout.Wrapper {...props}>{gap ? newChildren : children}</Layout.Wrapper>
  );
};

const addPadding = (rows, gap) => {
  let ch_id = 0;
  const all_gaps = {};
  let prevCount;
  rows.forEach((row, i) => {
    let count = row.length;
    if (i && i === rows.length - 1 && row.length && row.isPartialyFill) {
      count = prevCount;
    }
    prevCount = count;
    const gapForOne = ((count - 1) * gap) / count;
    const gaps = [];
    row.forEach((ch, j) => {
      const lastGap = gaps[gaps.length - 1] || 0;
      let leftGap = 0;
      let rightGap = 0;

      leftGap = gap - lastGap;
      rightGap = gapForOne - leftGap;

      if (j == 0) {
        leftGap = 0;
        rightGap = gapForOne;
      } else if (j == count - 1) {
        rightGap = 0;
        leftGap = gapForOne;
      }

      gaps.push(leftGap);
      gaps.push(rightGap);
      ch_id++;
      all_gaps[ch_id] = { leftGap, rightGap };
    });
  });

  return all_gaps;
};

Layout.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.number,
};

Layout.Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const getWidth = (col) => `${(col / MAX_SEG_COUNT) * 100}%`;

Layout.Item = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  ${(props) =>
    props.colD &&
    css`
      max-width: ${(props) => getWidth(props.colD)};
      padding: ${(props) =>
        props.gap
          ? `0 ${props.rightGapD}px ${props.gap}px ${props.leftGapD}px`
          : '0'};
    `}

  ${(props) =>
    props.colT &&
    css`
      @media (max-width: 768px) and (min-width: 481px) {
        max-width: ${(props) => getWidth(props.colT)};
        padding: ${(props) =>
          props.gap
            ? `0 ${props.rightGapT}px ${props.gap}px ${props.leftGapT}px`
            : '0'};
      }
    `}

  ${(props) =>
    props.colM &&
    css`
      @media (max-width: 480px) {
        padding: ${(props) =>
          props.gap
            ? `0 ${props.rightGapM}px ${props.gap}px ${props.leftGapM}px`
            : '0'};
        max-width: ${(props) => getWidth(props.colM)};
      }
    `}
`;

export default Layout;
