/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Li, Img, Modal, ModalContent } from '../../../Components/Li/Styles';

const FeedProductItem = ({ product, setOpenModal }) => {
  return (
    <>
      <Li className='product-li'>
        <Img
          src={product.urls.regular}
          alt={product.description}
          onClick={() => setOpenModal({ open: true, product: product })}
          product={product}
        />
      </Li>
    </>
  );
};

export default FeedProductItem;
