import axios, { AxiosResponse } from 'axios';

export const getProfile = async (): Promise<AxiosResponse> =>
  axios.get('/api/profile/me');

export const getSocialLst = async (): Promise<AxiosResponse> =>
  axios.get('/api/social');
