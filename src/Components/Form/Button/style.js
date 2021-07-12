import styled from 'styled-components';

export const Btn = styled.button`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #ccc;
  color: #000;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  margin-top: 1rem;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #eee, 0 0 0 4px #000;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
