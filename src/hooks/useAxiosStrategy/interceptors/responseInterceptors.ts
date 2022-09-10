import { showNotification } from '@mantine/notifications';
import { AxiosError, AxiosResponse } from 'axios';

import { RebrickableError } from '@/api/actions/minifigs/minifigs.types';

export const responseSuccessInterceptor = (response: AxiosResponse) => response;

export const responseFailureInterceptor = async (error: AxiosError<RebrickableError>) => {
  const data = error?.response?.data;

  showNotification({
    title: 'Error',
    message: data?.detail || error.message || 'Something went wrong',
    color: 'red',
  });

  return Promise.reject(error);
};
