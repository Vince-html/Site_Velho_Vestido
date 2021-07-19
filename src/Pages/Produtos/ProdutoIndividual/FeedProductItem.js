/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Li, Img } from '../../../Components/Li/Styles';
import { useHistory } from 'react-router-dom';

const FeedProductItem = ({ product }) => {
  const history = useHistory();

  function handleClick() {
    history.push(`/produto/${product.id}`);
  }
  return (
    <Li className='product-li'>
      <Img
        src={product.src}
        alt={product.titulo}
        onClick={handleClick}
        product={product}
      />
    </Li>
  );
};

export default FeedProductItem;
