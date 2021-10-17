import { getHeaders } from '@/utils';

import axios from 'axios';

axios.defaults.baseURL = process.env.API_SERVER_URL;

// Where you would set stuff like your 'Authorization' header, etc ...
axios.defaults.headers = getHeaders();

// Add configure interceptors && all the other cool stuff
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export const refreshHeader = (): void => {
  axios.defaults.headers = getHeaders();
};

export default axios;
