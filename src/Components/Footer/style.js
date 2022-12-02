import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  text-align: center;
  padding: 5rem;
  font-size: 1.5rem;

  background-color: white;
  bottom: 0;

  & h1 {
    font-size: 2rem;
  }
  & p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
