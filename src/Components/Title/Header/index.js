import React, { useRef, useState, useEffect } from 'react';
import { searchPhoto } from '../../../store/product';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import { useSelector, useDispatch } from 'react-redux';
import {
  Section,
  StyledMenu,
  StyledBurger2,
  DivRef,
  StyledBurger,
} from './style';

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
const Burger2 = ({ open, setOpen }) => {
  return (
    <StyledBurger2 open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger2>
  );
};

const Header = () => {
  const { searchParam } = useSelector((state) => state.product);
  const [textValue, setTextValue] = useState(searchParam);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      dispatch(searchPhoto(textValue));
    }
  };

  // const node = useRef();
  // useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      {/* <Burger2 open={open} setOpen={setOpen} /> */}
      {/* <Menu open={open} setOpen={setOpen} /> */}
      <Section>
        <DivRef>
          <input
            type='text'
            placeholder='Buscar'
            onKeyPress={handleSubmit}
            onChange={(e) => setTextValue(e.target.value)}
            style={{
              width: '100%',
              height: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '0 10px',

              outline: 'none',
            }}
          />
          {/* <Burger open={open} setOpen={setOpen} /> */}

          <Logo to='/'>Unsplash</Logo>
        </DivRef>
      </Section>
    </>
  );
};

export default Header;
