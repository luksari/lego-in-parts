import { useCallback, useMemo } from 'react';
import Axios, { AxiosRequestConfig } from 'axios';
import { MutationFunction, QueryFunction } from 'react-query';

import { responseFailureInterceptor, responseSuccessInterceptor } from './interceptors/responseInterceptors';

import { getAxiosConfig } from '@/hooks/useAxiosStrategy/axiosConfig/axiosConfig';
import { ApiClientContextValue } from '@/context/apiClient/ApiClientContext.types';
import { MutationFn } from '@/hooks/useMutation/useMutation.types';

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
          const res = await client.get<TData>(url);

          return res?.data;
        }
        throw new Error('Invalid QueryKey');
      },
    [client],
  );

  const mutationFn = useCallback(
    <TParams = unknown, TData = unknown>(mutation: MutationFn<TParams, TData>): MutationFunction<TData, TParams> =>
      async (variables) => {
        const { endpoint, params, method, headers, timeout, shouldUseBaseUrl = true } = mutation(variables);

        const axiosConfig: AxiosRequestConfig = {
          url: `/${endpoint}`,
          data: params,
          method: method,
          headers,
          timeout,
          ...(!shouldUseBaseUrl && { baseURL: '' }),
        };
        const { data } = await client.request<TData>(axiosConfig);

        return data;
      },
    [client],
  );

  return useMemo(
    () => ({
      queryFn,
      mutationFn,
    }),
    [mutationFn, queryFn],
  );
};
