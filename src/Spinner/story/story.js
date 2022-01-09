import React from 'react';
import Spinner from '../Spinner';
import SpinnerCircular from '../SpinnerCircular';
import Stack from '../../helpers/story-stack';
import Example from '../../helpers/story-example';
import { red, yellow, green, orange, purple, teal } from '../../tokens/color';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  padding: 10px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

function SpinnerStory() {
  return (
    <div>
      <Example title='Default Spinner'>
        <Stack align='left'>
          <h2>Small: </h2>&nbsp;&nbsp;&nbsp;
          <Spinner />
        </Stack>
        <Stack align='left'>
          <h2>medium: </h2>&nbsp;&nbsp;&nbsp;
          <Spinner size='medium' />
        </Stack>
        <Stack align='left'>
          <h2>large: </h2>&nbsp;&nbsp;&nbsp;
          <Spinner size='large' />
        </Stack>
      </Example>
      <Example title='Circular Spinner'>
        <Stack align='left'>
          <h2>Small: </h2>&nbsp;&nbsp;&nbsp;
          <SpinnerCircular />
        </Stack>
        <Stack align='left'>
          <h2>medium: </h2>&nbsp;&nbsp;&nbsp;
          <SpinnerCircular size='medium' />
        </Stack>
        <Stack align='left'>
          <h2>large: </h2>&nbsp;&nbsp;&nbsp;
          <SpinnerCircular size='large' />
        </Stack>
      </Example>
      <Example title='Colored Small Spinner'>
        <Stack align='left'>
          <Wrapper>
            <Spinner color={red.z500} />
          </Wrapper>
          <Wrapper>
            <Spinner color={teal.z500} />
          </Wrapper>
          <Wrapper>
            <Spinner color={yellow.z500} />
          </Wrapper>
          <Wrapper>
            <Spinner color={green.z500} />
          </Wrapper>
          <Wrapper>
            <Spinner color={purple.z500} />
          </Wrapper>
        </Stack>
      </Example>
      <Example title='Colored Small Circular Spinner'>
        <Stack align='left'>
          <Wrapper>
            <SpinnerCircular color={red.z500} />
          </Wrapper>
          <Wrapper>
            <SpinnerCircular color={teal.z500} />
          </Wrapper>
          <Wrapper>
            <SpinnerCircular color={yellow.z500} />
          </Wrapper>
          <Wrapper>
            <SpinnerCircular color={green.z500} />
          </Wrapper>
          <Wrapper>
            <SpinnerCircular color={purple.z500} />
          </Wrapper>
        </Stack>
      </Example>
      <Example title='Colored Medium Spinner'>
        <Stack align='left'>
          <Wrapper>
            <Spinner color={red.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <Spinner color={teal.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <Spinner color={yellow.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <Spinner color={green.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <Spinner color={purple.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <Spinner color={orange.z500} size='medium' />
          </Wrapper>
        </Stack>
      </Example>
      <Example title='Colored Medium Circular Spinner'>
        <Stack align='left'>
          <Wrapper>
            <SpinnerCircular color={red.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <SpinnerCircular color={teal.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <SpinnerCircular color={yellow.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <SpinnerCircular color={green.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <SpinnerCircular color={purple.z500} size='medium' />
          </Wrapper>
          <Wrapper>
            <SpinnerCircular color={orange.z500} size='medium' />
          </Wrapper>
        </Stack>
      </Example>
    </div>
  );
}

export { SpinnerStory };
