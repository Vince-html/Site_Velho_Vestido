import { apiUnsplash } from '../apiUnsplash';

class UnsplashService {
  constructor(apiUnsplash) {
    this.apiUnsplash = apiUnsplash;
  }

  async getPhotos(params) {
    const response = await this.apiUnsplash.get('/search/photos', {
      params: {
        ...params,
        client_id: 'lJHm-9tMfc-gSoZnIf5jbTd4JT9hRk5LI0mzlaWkag8',
      },
    });
    return response.data;
  }
}

const unsplashService = new UnsplashService(apiUnsplash);

export default unsplashService;
