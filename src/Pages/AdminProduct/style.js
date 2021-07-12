import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 10rem;
  display: flex;
  width: 100%;
  flex-direction: column;

  div {
    margin-top: 1rem;
    width: 100%;
  }

  label {
    margin: 0;
  }

  input {
    width: 100%;
  }
`;
export const Section = styled.section`
  padding: 0;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  gap: 2rem;
  opacity: 0;
  transform: translateX(-40px);
  animation: animeLeft 1s forwards;
  margin-top: 2rem;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  box-sizing: border-box;

  textarea {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border-color: #333;
      background: white;
      box-shadow: 0 0 0 3px #ccc;
    }
  }
  #img {
    margin-bottom: 1rem;
  }

  .img-preview {
    background-color: black;
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;
    width: 100%;

    &::after {
      content: '';
      display: block;
      height: 0px;
      padding-bottom: 100%;
    }
  }

  .fieldform {
    margin-top: 0.25rem;
    width: 100%;
    height: 2.5rem;
    border: none;

    select {
      color: #333;
      background-color: #eee;
      border: 0.25px solid;
      border-color: #aaa;
      border-radius: 4px;

      &:hover,
      &:focus {
        outline: none;
        border-color: #333;
        background: white;
        box-shadow: 0 0 0 3px #ccc;
      }
    }
  }
`;
