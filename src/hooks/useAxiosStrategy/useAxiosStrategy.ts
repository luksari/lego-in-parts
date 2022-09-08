import { useCallback, useMemo } from 'react';
import Axios from 'axios';
import { QueryFunction } from 'react-query';

import { responseFailureInterceptor, responseSuccessInterceptor } from './interceptors/responseInterceptors';

import { getAxiosConfig } from '@/hooks/useAxiosStrategy/axiosConfig/axiosConfig';
import { ApiClientContextValue } from '@/context/apiClient/ApiClientContext.types';

export const useAxiosStrategy = (): ApiClientContextValue => {
  const client = useMemo(() => {
    const axios = Axios.create(getAxiosConfig());

    axios.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

    return axios;
  }, []);

  const queryFn = useCallback(
    <TData>(): QueryFunction<TData> =>
      async ({ queryKey: [url] }) => {
        if (typeof url === 'string') {
          const { data } = await client.get<TData>(url);

          return data;
        }
        throw new Error('Invalid QueryKey');
      },
    [client],
  );

  return useMemo(
    () => ({
      queryFn,
    }),
    [queryFn],
  );
};
