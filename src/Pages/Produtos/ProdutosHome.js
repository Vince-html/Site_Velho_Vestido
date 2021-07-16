import React, { useEffect, useState } from 'react';

import FeedModal from '../Produtos/ProdutoIndividual/FeedModal';
import FeedProducts from './FeedProducts';

const Feed = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);
  console.log(modalProduct);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.65 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 1000);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);
  console.log(pages);
  return (
    <>
      {modalProduct && (
        <FeedModal product={modalProduct} setModalPhoto={setModalProduct} />
      )}
      {pages.map((page) => {
        return (
          <FeedProducts
            key={page}
            page={page}
            setModalPhoto={setModalProduct}
            setInfinite={setInfinite}
          />
        );
      })}
    </>
  );
};

export default Feed;
