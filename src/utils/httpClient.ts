'use strict';

import config from '@/config';
import { TokenFunctions } from '@/functions/tokenFunctions';
import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: config.api.baseURL + ':' + config.api.port,
};

const httpClient = axios.create(axiosConfig);

httpClient.interceptors.request.use(
  (request: AxiosRequestConfig<unknown>) => {
    if (!request.url?.includes('login') && !request.url?.includes('register')) {
      const token = TokenFunctions.getToken();
      if (!token) throw new Error('Token not found');
      if (request.headers) request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
