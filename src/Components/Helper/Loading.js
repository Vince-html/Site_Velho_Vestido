/* eslint-disable no-shadow */

import styled, { keyframes } from 'styled-components';

const rotate = () => keyframes`
 0%{
   transform: translate(-50%, -50%) rotate(0deg);
 }
 100%{
   transform: translate(-50%, -50%) rotate(360deg);    
 }

`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  margin: 0 auto;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const Text = styled.p`
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-width: 0.5rem;
    border-color: transparent;
    border-style: solid;
    border-radius: 50%;
  }

  &:after {
    width: 6rem;
    height: 6rem;
    border-left: 0.5rem solid black;
    border-top: 0.5rem solid black;
    animation: ${rotate()} 3s linear infinite;
  }
  &:before {
    width: 2rem;
    height: 2rem;
    border-left: 0.5rem solid black;
    border-top: 0.5rem solid black;
    animation: ${rotate()} 1.5s linear reverse infinite;
  }
`;

const Loading = () => {
  return (
    <>
      {' '}
      <Container>
        <Text></Text>
      </Container>
    </>
  );
};

export default Loading;
