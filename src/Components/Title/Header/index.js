import React, { useRef, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../logo';
import { Section, StyledMenu, StyledBurger } from './style';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to='/masculino'>Masculino</Link>
      <Link to='/feminino'>Feminino</Link>
      <Link to='/sapatos'>Sapatos</Link>
      <Link to='/tenis'>Tênis</Link>
      <Link to='/outlet'>Outlet</Link>
    </StyledMenu>
  );
};

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Section>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Logo to='/'>Velho Vestido</Logo>
      </div>
    </Section>
  );
};

export default Header;
