/* eslint-disable no-undef */
import React from 'react';
import FeedProduct from '../Produtos/FeedProducts';

const Masculino = ({ categoria }) => {
  return (
    <div>
      <FeedProduct categoria={categoria} />
    </div>
  );
};

export default Masculino;
