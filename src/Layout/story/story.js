import React from 'react';
import Layout from '../Layout';
import styled from 'styled-components';
import { blue } from '../../tokens/color';

const LayoutStory = () => {
  return (
    <>
      <Layout gap={10}>
        <LayoutItem colD={12} colT={6} colM={12}>
          <Box>colD = 12, colT = 6, colM = 12</Box>
        </LayoutItem>
        <LayoutItem colD={6} colT={6} colM={12}>
          <Box>colD = 6, colT = 6, colM = 12</Box>
        </LayoutItem>
        <LayoutItem colD={6} colT={4} colM={12}>
          <Box>colD = 6, colT = 4, colM = 12</Box>
        </LayoutItem>
        <LayoutItem colD={4} colT={4} colM={12}>
          <Box>colD = 4, colT = 4, colM = 12</Box>
        </LayoutItem>
        <LayoutItem colD={4} colT={4} colM={12}>
          <Box>colD = 4, colT = 4, colM = 12</Box>
        </LayoutItem>
        <LayoutItem colD={4} colT={3} colM={12}>
          <Box>colD = 4, colT = 3, colM = 12</Box>
        </LayoutItem>
        <LayoutItem colD={3} colT={3} colM={12}>
          <Box>colD = 3, colT = 3, colM = 12</Box>
        </LayoutItem>
        <LayoutItem colD={3} colT={3} colM={12}>
          <Box>colD = 3, colT = 3, colM = 12</Box>
        </LayoutItem>
        <LayoutItem colD={3} colT={3} colM={12}>
          <Box>colD = 3, colT = 3, colM = 12</Box>
        </LayoutItem>
        <LayoutItem colD={3} colT={3} colM={12}>
          <Box>colD = 3, colT = 3, colM = 12</Box>
        </LayoutItem>
      </Layout>
      <p>Resize the window to change the layout</p>
    </>
  );
};

export { LayoutStory };

const Box = styled.div`
  width: 100%;
  height: 100px;
  background: #3e3e3e;
`;

const LayoutItem = styled(Layout.Item)`
  display: flex;
  align-items: center;
  color: ${blue.z500};
  text-align: center;
  font-size: 14px;
  justify-content: center;
`;
