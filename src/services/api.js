import axios from 'axios';

const api = axios.create({
  baseURL: 'https://velhovestido.000webhostapp.com/json',
});

export { api };
