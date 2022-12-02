import styled from 'styled-components';
export const Main = styled.div`
  margin-top: 5rem;
  max-width: 70%;
`;

export const TopSection = styled.div`
    margin-top: 0.5rem;
    display: grid;
    z-index: 100;
    justify-content: space-between;
   button{
      grid-area: 1/4;
    }
  }
`;

export const SubMenu = styled.div`
  display: flex;

  align-items: center;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  gap: 5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30rem;
  margin-top: 2rem;
  max-width: initial;

  @media (max-width: 50rem) {
    display: block;
  }
`;

export const Button = styled.button`
  width: 10rem;
  height: 0.75rem;
  border-radius: 0.25rem;
  padding: 1.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
  margin-inline-start: initial;

  &:hover {
    background: #ddd;
    color: black;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const ProductDescription = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  margin-inline-start: initial;

  @media (max-width: 50rem) {
    grid-template-rows: 1fr 1fr 1fr;
  }

  .title-product {
    text-transform: uppercase;
    font-weight: 900;
    text-align: left;
    font-size: 2rem;
    margin-inline-start: initial;

    p {
      font-size: 0.875rem;
      color: #ccc;
      text-transform: none;
      margin-inline-start: initial;
    }
  }
`;
export const Pdescription = styled.p`
  display: flex;
  font-size: 1rem;
  line-height: 1.5rem;
  align-items: center;
  margin-inline-start: initial;
`;
