import styled from 'styled-components';

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  gap: 1rem;

  grid-template-areas:
    'a a b b c c'
    'a a b b c c'
    'a a d d c c'
    'e e d d f f'
    'e e d d f f';

  @media (max-width: 765px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'a b'
      'c d'
      'e f';
  }
`;

export const Li = styled.li`
  border-radius: 0.4rem;
  list-style: none;
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 100%;

  div {
    overflow: hidden;
  }

  &:nth-child(1) {
    grid-area: a;
  }

  &:nth-child(2) {
    grid-area: b;
  }

  &:nth-child(3) {
    grid-area: c;
  }
  &:nth-child(4) {
    grid-area: d;
  }
  &:nth-child(5) {
    grid-area: e;
  }
  &:nth-child(6) {
    grid-area: f;
  }
`;

export const Img = styled.img`
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 80%;
  max-width: 800px;
  height: 80%;
  max-height: 800px;
  border-radius: 0.25rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 0 0 0 0.25rem;
  }
`;
