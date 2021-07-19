/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import FeedProductItem from './ProdutoIndividual/FeedProductItem';
import useFetch from '../../Hooks/useFetch';
import { PRODUCTS_GET } from '../../api';
import Error from '../../Components/Helper/Error';
import { Ul } from './styles';
import { useLocation } from 'react-router-dom';

const FeedProducts = ({ page, setInfinite }, props) => {
  const { data, error, request } = useFetch();
  const [categoria, setCategoria] = useState('');
  const location = useLocation();
  const category = location.pathname;

  useEffect(() => {
    if (category === '/') {
      setCategoria('');
    }
    if (category === '/masculino') {
      setCategoria('masculino');
    }
    if (category === '/feminino') {
      setCategoria('feminino');
    }
    if (category === '/sapatos') {
      setCategoria('sapato');
    }
  }, [category, setCategoria]);

  useEffect(() => {
    async function fetchProduct() {
      const total = 6;

      const { url, options } = PRODUCTS_GET({
        page,
        total,
        categoria: `${categoria}`,
      });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchProduct();
  }, [request, page, categoria, setInfinite]);

  if (error) return <Error error={error} />;
  if (data) {
    return (
      <>
        <Ul className='feed-product animeLeft'>
          {data.map((product) => {
            return <FeedProductItem key={product.id} product={product} />;
          })}
        </Ul>
      </>
    );
  } else return null;
};

export default FeedProducts;
