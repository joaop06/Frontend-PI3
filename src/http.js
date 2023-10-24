import axios from 'axios';

const api = axios.create({
  baseURL: 'https://qprzvp-7000.csb.app',
});

export default api;