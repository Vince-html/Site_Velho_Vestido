import axios from 'axios';

const apiUnsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export { apiUnsplash };
