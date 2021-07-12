/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Li, Img } from '../../../Components/Li/Styles';

const FeedProductItem = ({ product, setModalProduct }) => {
  function handleClick() {
    setModalProduct(product);
  }
  return (
    <Li className='product-li'>
      <Img src={product.src} alt={product.titulo} onClick={handleClick} />
      {/* <span className='product-span'>{product.title}</span> */}
    </Li>
  );
};

export default FeedProductItem;
