import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
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

  &:hover {
    background: #ddd;
    color: black;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = (props) => {
  return <NavLink to='/'>{props.children}</NavLink>;
};

export default Logo;
