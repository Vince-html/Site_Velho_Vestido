import styled from 'styled-components';

export const Ul = styled.ul`
  display: grid;
  margin-top: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  max-height: 60rem;
  gap: 1rem;

  grid-template-areas:
    'a a b b c c'
    'a a b b c c'
    'a a d d c c'
    'e e d d f f'
    'e e d d f f';

  @media (max-width: 765px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    max-height: 100%;
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
  min-width: 670px;
  min-height: 380px;
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
