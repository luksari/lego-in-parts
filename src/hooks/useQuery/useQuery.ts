import { useMemo } from 'react';
import { QueryKey, UseQueryResult, useQuery as useRqQuery } from 'react-query';
import { UseQueryOptions } from 'react-query/types/react/types';

import { useApiClient } from '../useApiClient/useApiClient';

export const useQuery = <TData = unknown, TError = unknown>(
  queryKey: QueryKey,
  options?: UseQueryOptions<TData, TError>,
): UseQueryResult<TData, TError> => {
  const { queryFn: clientQueryFn } = useApiClient();
  const queryFn = useMemo(() => clientQueryFn<TData>(), [clientQueryFn]);

  return useRqQuery<TData, TError, TData, QueryKey>(queryKey, queryFn, options);
};
