import { QueryKey, useInfiniteQuery as useRQInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { useMemo } from 'react';

import { InfiniteQueryFn, UseInfiniteQueryOptions } from './useInfiniteQuery.types';

import { useApiClient } from '@/hooks/useApiClient/useApiClient';

/**
 * Fetching data using this hook doesn't require specifying query function like it's required in react-query
 * @see https://react-query.tanstack.com/guides/query-functions
 * This hook uses proper querying strategy provided via ApiClientContext
 * @see ApiClientContextController.ts
 * */
export const useInfiniteQuery = <TArgs = unknown, TParams = unknown, TError = unknown, TResponse = TParams>(
  queryKey: QueryKey,
  query: InfiniteQueryFn<TArgs, TParams, TResponse>,
  options?: UseInfiniteQueryOptions<TArgs, TParams, TError, TResponse>,
): UseInfiniteQueryResult<TResponse, TError> => {
  const { infiniteQueryFn: clientInfiniteQueryFn } = useApiClient();
  const infiniteQueryFn = useMemo(
    () => clientInfiniteQueryFn<TArgs, TParams, TResponse, TError>(query, options),
    [clientInfiniteQueryFn, query, options],
  );

  return useRQInfiniteQuery<TParams, TError, TResponse, QueryKey>(queryKey, infiniteQueryFn, options);
};
