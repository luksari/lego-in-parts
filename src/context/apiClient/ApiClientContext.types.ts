import { QueryFunction } from 'react-query';

export type ApiClientContextValue = {
  queryFn: <TData>() => QueryFunction<TData>;
};
