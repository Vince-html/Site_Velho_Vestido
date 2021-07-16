import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

const ProductContent = ({ data, single }) => {
  const user = useContext(UserContext);

  const { product } = data;
  return (
    // <div className="photo-content">
    <div className={`photo-content ${single ? 'photo-single' : ''}`}>
      <div className='photo-content-img'>
        <img className='img' src={product.src} alt={product.title} />
      </div>
      <div className='product-details'>
        <div>
          <p className='author'>
            {user.data && user.data.username === product.author ? (
              <productDelete id={product.id} />
            ) : (
              ''
            )}
          </p>
          <h1 className='title-geral'>
            <Link to={`/foto/${product.id}`}>{product.title}</Link>
          </h1>
          <ul className='attributes'>
            <li>{product.descricao}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
