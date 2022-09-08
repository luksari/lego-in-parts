import { useCallback, useMemo } from 'react';
import Axios, { AxiosRequestConfig } from 'axios';
import { MutationFunction, QueryFunction } from 'react-query';
import { stringify } from 'qs';
import isNil from 'lodash/isNil';

import { InfiniteQueryFn, UseInfiniteQueryOptions } from 'hooks/useInfiniteQuery/useInfiniteQuery.types';
import { MutationFn } from 'hooks/useMutation/useMutation.types';

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

  const infiniteQueryFn = useCallback(
    <TArgs, TParams, TResponse, TError>(
        query: InfiniteQueryFn<TArgs, TParams, TResponse>,
        options?: UseInfiniteQueryOptions<TArgs, TParams, TError, TResponse>,
      ): QueryFunction<TParams> =>
      async ({ pageParam, signal }) => {
        const { endpoint, args } = query(options?.args);
        const queryArgs = args ? stringify(args, { arrayFormat: 'brackets' }) : '';
        const queryCursors = pageParam ? stringify(pageParam, { arrayFormat: 'brackets' }) : '';

        const url = isNil(pageParam) ? `/${endpoint}?${queryArgs}` : `/${endpoint}?${queryCursors}&${queryArgs}`;

        const { data } = await client.get<TParams>(url, { signal });

        return data;
      },
    [client],
  );

  const mutationFn = useCallback(
    <TParams = unknown, TData = unknown>(mutation: MutationFn<TParams, TData>): MutationFunction<TData, TParams> =>
      async (variables) => {
        const { endpoint, params, method, headers, timeout } = mutation(variables);

        const axiosConfig: AxiosRequestConfig = {
          url: `/${endpoint}`,
          data: params,
          method: method || 'POST',
          headers,
          timeout,
        };
        const { data } = await client.request<TData>(axiosConfig);

        return data;
      },
    [client],
  );

  return {
    queryFn,
    infiniteQueryFn,
    mutationFn,
  };
};
