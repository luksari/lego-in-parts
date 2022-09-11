import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useAxiosStrategy } from 'hooks/useAxiosStrategy/useAxiosStrategy';

import { ApiClientControllerProps } from './ApiClientContextController.types';
import { ApiClientContext } from './ApiClientContext';

import { ApiClientContextValue } from '@/context/apiClient/ApiClientContext.types';

export const ApiClientContextController = ({ children }: ApiClientControllerProps) => {
  const { queryFn, mutationFn } = useAxiosStrategy();

  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          queryFn: queryFn(),
          refetchOnWindowFocus: false,
        },
      },
    });
  }, [queryFn]);

  const ctxValue: ApiClientContextValue = useMemo(
    () => ({
      queryFn,
      mutationFn,
    }),
    [mutationFn, queryFn],
  );

  return (
    <ApiClientContext.Provider value={ctxValue}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientContext.Provider>
  );
};
