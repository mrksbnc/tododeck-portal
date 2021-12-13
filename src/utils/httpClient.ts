'use strict';

import config from '@/config';
import { getToken } from '@/utils/token';
import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: config.api.baseURL + ':' + config.api.port,
};

const httpClient = axios.create(axiosConfig);

httpClient.interceptors.request.use(
  (request: AxiosRequestConfig<unknown>) => {
    if (!request.url?.includes('login') && !request.url?.includes('register')) {
      const token = getToken();
      if (!token) throw new Error('Token not found');
      if (request.headers) request.headers['authorization'] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
