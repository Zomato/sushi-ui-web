import React, { useState, useRef, useEffect } from 'react';
import Modal from '../Modal';
import Button from '../../Button';
import ZImage from '../../ZImage';
import Input from '../../InputTypes/Input';

import styled, { css } from 'styled-components';

const ModalStory = () => {
  const [isLightVisible, setLightVisibility] = useState(false);
  const [isDarkVisible, setDarkVisibility] = useState(false);
  const [isLongModalVisible, setLongVisibility] = useState(false);

  const inputRef = useRef();
  const longModalInputRef = useRef();

  const handleLightClose = () => setLightVisibility(false);
  const handleLightClick = () => setLightVisibility(true);

  const handleDarkClose = () => setDarkVisibility(false);
  const handleDarkClick = () => setDarkVisibility(true);

  const handleLongModalClose = () => setLongVisibility(false);
  const handleLongModalClick = () => setLongVisibility(true);

  useEffect(() => {
    console.log(longModalInputRef);
    console.log(isLongModalVisible);
    if (isLongModalVisible && longModalInputRef.current) {
      longModalInputRef.current.focus();
    }
  }, [isLongModalVisible]);

  useEffect(() => {
    console.log(inputRef);
    console.log(isLightVisible);
    if (isLightVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLightVisible]);

  return (
    <div>
      <Button appearance='outline' onClick={handleLightClick}>
        Open Modal
      </Button>
      <Modal
        visible={isLightVisible}
        onClose={handleLightClose}
        type='medium'
        titleComponent={<h2>Hey There</h2>}
        padding='2rem'
        slideOnMobile
        maxHeight='20rem'
        showFooter
        mobileHeight='46vh'
        flatModal
        preventFocus
        renderFooter={() => <div>Footer</div>}
      >
        <Wrapper>
          <p>This is a simple Modal component demo</p>
          <Input label='Name' ref={inputRef} />
          <ZImage src={src} width='556px' height='339px' alt='Sample image' />
        </Wrapper>
      </Modal>
      <DarkModalButton appearance='outline' onClick={handleDarkClick}>
        Open Dark Modal
      </DarkModalButton>
      <Modal
        mode='dark'
        visible={isDarkVisible}
        onClose={handleDarkClose}
        type='medium'
        titleComponent={<Heading>Hey There</Heading>}
        padding='2rem'
        slideOnMobile
        maxHeight='20rem'
        showFooter
        renderFooter={() => <WhiteText>Footer</WhiteText>}
      >
        <Wrapper>
          <WhiteText>This is a simple Dark Modal component demo</WhiteText>
          <ZImage src={src} width='556px' height='339px' alt='Sample image' />
        </Wrapper>
      </Modal>
      <DarkModalButton appearance='outline' onClick={handleLongModalClick}>
        Open Long Modal
      </DarkModalButton>
      <Modal
        visible={isLongModalVisible}
        onClose={handleLongModalClose}
        type='huge'
        titleComponent={<Heading>Hey There</Heading>}
        padding='2rem'
        slideOnMobile
        preventFocus
        useAbsoluteHeight
      >
        <Wrapper>
          <p>This is a Modal component with no specified maximum height</p>
          <Input label='Name' ref={longModalInputRef} />
        </Wrapper>
      </Modal>
    </div>
  );
};

const WhiteColor = css`
  color: '#FFF';
`;

const Heading = styled.h2`
  ${WhiteColor};
`;

const WhiteText = styled.div`
  ${WhiteColor};
`;

const src =
  'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DarkModalButton = styled(Button)`
  margin-left: 1.5rem;
`;

export { ModalStory };
