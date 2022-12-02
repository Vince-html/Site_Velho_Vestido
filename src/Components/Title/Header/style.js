import styled from 'styled-components';

export const Section = styled.section`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  padding: 10px;
`;

export const DivRef = styled.div`
  margin-top: 0.5rem;

  display: grid;
  z-index: 100;
  align-items: center;

  justify-content: space-between;

  a {
    grid-area: 1/4;
  }
`;

export const StyledMenu = styled.nav`
  max-width: 100%;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;

  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
    max-width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

export const StyledBurger2 = styled.button`
  position: ${({ open }) => (open ? 'absolute' : '0')};
  left: 16vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 576px) {
    left: 90vw;
  }

  &:focus {
    outline: none;
  }

  div {
    left: ${({ open }) => (open ? '0' : '0')};
    width: 2rem;
    height: 0.2rem;
    background: ${({ open }) => (open ? 'white' : '#000')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const StyledBurger = styled.button`
  position: ${({ open }) => (open ? 'absolute' : '0')};

  display: ${({ open }) => (open ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 576px) {
    left: 90vw;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background: #000;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
