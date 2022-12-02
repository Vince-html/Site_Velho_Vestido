/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import FeedProductItem from './ProdutoIndividual/FeedProductItem';
import useFetch from '../../Hooks/useFetch';
import { PRODUCTS_GET } from '../../api';
import Error from '../../Components/Helper/Error';
import { Ul } from './styles';
import { useLocation } from 'react-router-dom';
import Loading from '../../Components/Helper/Loading';
import unsplashService from '../../services/UnsplashService';
import { useDispatch } from 'react-redux';
import { fetchProductLoading, fetchProductSuccess } from '../../store/product';
import { useSelector } from 'react-redux';

const FeedProducts = ({ page, setInfinite, setOpenModal }, props) => {
  const { searchParam, loading, error } = useSelector((state) => state.product);
  const [categoria, setCategoria] = useState('random' || searchParam);
  const location = useLocation();
  const category = location.pathname;

  const dispatch = useDispatch();

  const [photos, setPhotos] = useState([]);

  const getPhotos = useCallback(async () => {
    try {
      dispatch(fetchProductLoading());

      const params = {
        query: searchParam || categoria,
        per_page: 6,
        page: page,
      };
      const response = await unsplashService.getPhotos(params);
      dispatch(fetchProductSuccess(response.results));

      setPhotos(response.results);
    } catch (err) {
      console.log(err);
    }
  }, [categoria, page, searchParam]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  if (error) return <Error error={error} />;

  if (photos) {
    return (
      <>
        <Ul className='feed-product animeLeft'>
          {photos.map((photo) => {
            return (
              <FeedProductItem
                key={photo.id}
                product={photo}
                setOpenModal={setOpenModal}
              />
            );
          })}
          {loading && <Loading />}
        </Ul>
      </>
    );
  } else return null;
};

export default FeedProducts;
