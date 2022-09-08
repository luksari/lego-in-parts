import { useContext } from 'react';

import { ApiClientContext } from '@/context/apiClient/ApiClientContext';

export const useApiClient = () => {
  const ctx = useContext(ApiClientContext);

  if (!ctx) {
    throw new Error('useApiClient hook is not wrapped by ApiClient provider or Context value is not provided');
  }

  return ctx;
};
