import React, { useState } from 'react';
import Toast from '../Toast';
import Button from '../../Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ToastContainer from '../../ToastContainer';

function ToastStory() {
  return (
    <ToastContainer>
      <Wrapper>
        <ToastWrapper buttonLabel='Top' align='top' />
        <ToastWrapper buttonLabel='Top' align='top' type='success' />
        <ToastWrapper buttonLabel='Top' align='top' type='successSolid' />
        <ToastWrapper buttonLabel='Bottom' align='bottom' type='warning' />
        <ToastWrapper buttonLabel='Bottom' align='bottom' type='warningSolid' />
        <ToastWrapper buttonLabel='Bottom' align='bottom' type='error' />
        <ToastWrapper buttonLabel='Bottom' align='bottom' type='errorSolid' />
        <ToastWrapper buttonLabel='Bottom' align='bottom' type='darkDefault' />
      </Wrapper>
    </ToastContainer>
  );
}

export { ToastStory };

const Wrapper = styled.section`
  display: flex;
  margin-top: 5%;
  flex-wrap: wrap;

  > * {
    margin-top: 2rem;
    margin-right: 2rem;
  }
`;

const ToastWrapper = (props) => {
  const [show, setShow] = useState(false);
  const showToast = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Button appearance='outline' onClick={showToast}>
        {props.buttonLabel}
      </Button>
      <Toast
        show={show}
        align={props.align}
        onClose={handleClose}
        text={`This is a sample toast! for type ${props.type || 'default'}`}
        type={props.type}
      />
    </>
  );
};

ToastWrapper.propTypes = {
  buttonLabel: PropTypes.string,
  align: PropTypes.string,
  type: PropTypes.string,
};
