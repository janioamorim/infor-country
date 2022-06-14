import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v2/',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;