import React, { useEffect } from 'react';
import ProductContent from './Modal/ProductContent';
import useFetch from '../../../Hooks/useFetch';
import { PRODUCT_GET } from '../../../api';
import Error from '../../../Components/Helper/Error';
import { Modal } from './Modal/styles';

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
    <Modal onClick={handleOutside}>
      {error && <Error error={error} />}

      {data && <ProductContent data={data} />}
    </Modal>
  );
};

export default FeedModal;
