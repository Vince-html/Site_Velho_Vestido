import React from 'react';
import { Btn } from './style';

const Button = ({ children, ...props }) => {
  return (
    <Btn {...props} className='btn-component'>
      {children}
    </Btn>
  );
};

export default Button;
