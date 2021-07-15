import React from 'react';
import FeedProduct from '../Produtos/FeedProducts';

const Feminino = (props) => {
  console.log(props);
  return (
    <>
      <FeedProduct props={props} />
    </>
  );
};

export default Feminino;
