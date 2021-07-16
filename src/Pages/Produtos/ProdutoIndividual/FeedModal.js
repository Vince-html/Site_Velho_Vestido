/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import ProductContent from './ProductContent';

import useFetch from '../../../Hooks/useFetch';
import { PRODUCT_GET } from '../../../api';
import Error from '../../../Components/Helper/Error';

const FeedModal = ({ product, setModalProduct }) => {
  const { data, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PRODUCT_GET(product.id);
    request(url, options);
  }, [product, request]);

  function handleOutside(event) {
    if (event.target === event.currentTarget) {
      setModalProduct(null);
    }
  }

  return (
    <div onClick={handleOutside}>
      {error && <Error error={error} />}
      {data && console.log(data)}
      {data && <ProductContent single={false} data={data} />} */
    </div>
  );
};

export default FeedModal;
