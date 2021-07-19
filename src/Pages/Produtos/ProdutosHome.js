import React, { useEffect, useState } from 'react';

import FeedProducts from './FeedProducts';

const Feed = () => {
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;

        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.85 && !wait) {
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
          <FeedProducts key={page} page={page} setInfinite={setInfinite} />
        );
      })}
    </>
  );
};

export default Feed;
