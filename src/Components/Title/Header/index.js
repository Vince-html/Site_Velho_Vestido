import React, { useRef } from 'react';
import { useOnClickOutside } from '../../../Hooks/Hooks';
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
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = React.useState(false);
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
