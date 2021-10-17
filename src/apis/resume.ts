import axios, { AxiosResponse } from 'axios';

export const getResumeLst = async (): Promise<AxiosResponse> =>
  axios.get('/api/resume/public');
