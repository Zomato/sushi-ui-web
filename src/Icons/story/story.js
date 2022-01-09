import React from 'react';
import styled from 'styled-components';
import iconList from '../iconList';
import { cloneChildren } from '../../helpers/commonHelper';
import red from '../../tokens/color/red';

function IconStory() {
  return (
    <IconWrapper>
      {iconList.map((icon) => {
        return (
          <IconHolder key={icon.name}>
            {cloneChildren(icon.component, { size: 40, color: red.z700 })}
            <IconName>{icon.name}</IconName>
          </IconHolder>
        );
      })}
    </IconWrapper>
  );
}
const IconWrapper = styled.section`
  position: relative;
  padding: 10px;
  width: 100%;
  border: 0.5px solid #efefef;
  overflow: auto;
  border-radius: 4px;
`;

const IconHolder = styled.div`
  position: relative;
  float: left;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em;
  width: 18rem;
`;

const IconName = styled.span`
  margin: 5px;
  font-size: 12px;
`;

export { IconStory };
