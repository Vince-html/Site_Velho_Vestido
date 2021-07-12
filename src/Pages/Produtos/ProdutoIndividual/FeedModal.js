/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';

import useFetch from '../../../Hooks/useFetch';
import { PRODUCT_GET } from '../../../api';
import Error from '../../../Components/Helper/Error';

// import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ product, setModalPhoto }) => {
  const { data, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PRODUCT_GET(product.id);
    request(url, options);
  }, [product, request]);

  function handleOutside(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className='modal-photo' onClick={handleOutside}>
      {error && <Error error={error} />}
      {data && console.log(data)}
      {/* {data && <PhotoContent single={false} data={data} />} */}
    </div>
  );
};

export default FeedModal;
