/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Li, Img } from '../../../Components/Li/Styles';

const FeedProductItem = ({ product, setModalProduct }) => {
  console.log(setModalProduct);
  function handleClick(e) {
    e.preventDefault();
    setModalProduct(product);
  }
  return (
    <Li className='product-li'>
      <Img src={product.src} alt={product.titulo} onClick={handleClick} />
    </Li>
  );
};

export default FeedProductItem;
