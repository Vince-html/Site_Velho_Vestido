import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';
import { Ul, Section, Li, Img } from './style';

const api = createApi({
  apiUrl: 'https://api.unsplash.com/',
  accessKey: 'lJHm-9tMfc-gSoZnIf5jbTd4JT9hRk5LI0mzlaWkag8',
});
console.log(api);

const PhotoComp = ({ photo }) => {
  const { urls } = photo;

  return (
    <div>
      <Img className='img' src={urls.regular} alt='texto' />
    </div>
  );
};

const Body = ({ page }) => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({
        per_page: 6,
        query: 'surf',
      })
      .then((result) => {
        setPhotosResponse(result);
        console.log(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);
  console.log(data);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <Section className='animeLeft'>
        <Ul>
          {data.response.results.map((photo) => (
            <Li key={photo.id}>
              <PhotoComp photo={photo} />
            </Li>
          ))}
        </Ul>
      </Section>
    );
  }
};

const Home = () => {
  return (
    <>
      <Body />
    </>
  );
};

export default Home;
