import { AxiosRequestConfig } from 'axios';

export const getAxiosConfig = (): AxiosRequestConfig => {
  return {
    baseURL: 'https://rebrickable.com/api/v3',
    headers: {
      Authorization: `key ${import.meta.env.VITE_API_KEY}`,
      Accept: 'application/json',
    },
  };
};
