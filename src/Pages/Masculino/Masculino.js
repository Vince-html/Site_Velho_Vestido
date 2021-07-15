/* eslint-disable no-undef */
import React from 'react';
import FeedProduct from '../Produtos/FeedProducts';

const Masculino = (props) => {
  console.log(props.location.pathname);
  return (
    <div>
      <FeedProduct props={props} />
    </div>
  );
};

export default Masculino;
