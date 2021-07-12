import React from 'react';
import './Input';
import { Container } from './style';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </Container>
  );
};

export default Input;
