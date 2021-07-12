import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
  input {
    border: 1px solid #eeeeee;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background-color: #eee;
    transition: 0.3s;

    &:hover,
    &:focus {
      outline: none;
      border-color: #000;
      background: white;
      box-shadow: 0 0 0 3px #eee;
    }
  }
  p {
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }
`;
