import Axios, { InternalAxiosRequestConfig } from 'axios';
import { storage } from '@/utils/storage.ts';

const API_URL = '/api';

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers = config.headers ?? {};
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers.Accept = 'application/json';
  return config;
};

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
