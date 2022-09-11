import { UseMutationResult, useMutation as useRQMutation, UseMutationOptions, MutationKey } from 'react-query';
import { useMemo } from 'react';

import { useApiClient } from 'hooks/useApiClient/useApiClient';

import { MutationFn } from './useMutation.types';

/**
 * Mutating data using this hook doesn't require specifying mutation function like it is required in react-query
 * @see https://react-query.tanstack.com/guides/mutations
 * This hook uses proper mutating strategy provided via ApiClientContext
 * @see ApiClientContextController.ts
 * */
export const useMutation = <TData = unknown, TError = unknown, TParams = unknown, TContext = unknown>(
  mutationKey: MutationKey,
  mutation: MutationFn<TParams, TData, TError>,
  options?: UseMutationOptions<TData, TError, TParams, TContext>,
): UseMutationResult<TData, TError, TParams, TContext> => {
  const { mutationFn: clientMutationFn } = useApiClient();
  const mutationFn = useMemo(() => clientMutationFn<TParams, TData>(mutation), [clientMutationFn, mutation]);

  return useRQMutation<TData, TError, TParams, TContext>(mutationKey, mutationFn, options);
};
