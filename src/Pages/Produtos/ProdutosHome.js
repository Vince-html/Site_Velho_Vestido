import React, { useEffect, useState } from 'react';
import { Modal, ModalContent } from '../../Components/Li/Styles';

import FeedProducts from './FeedProducts';

const Feed = () => {
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);
  const [openModal, setOpenModal] = useState({
    open: false,
    product: {},
  });

  useEffect(() => {
    function infiniteScroll() {
      let wait = false;
      if (infinite) {
        const scroll = window.scrollY;

        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.9 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
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

  return (
    <>
      {pages.map((page) => {
        return (
          <FeedProducts
            key={page}
            page={page}
            setInfinite={setInfinite}
            setOpenModal={setOpenModal}
          />
        );
      })}

      {openModal.open && (
        <Modal>
          <ModalContent>
            <span
              className='close'
              onClick={() => setOpenModal({ open: false })}
            >
              X
            </span>
            <img
              src={openModal.product.urls.regular}
              alt={openModal.product.description}
            />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Feed;
