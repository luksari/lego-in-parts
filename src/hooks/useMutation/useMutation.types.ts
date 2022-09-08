import { MutationHTTPMethod } from 'api/types/types';

export type Mutation<TParams> = {
  endpoint: string;
  params: TParams;
  method: MutationHTTPMethod;
  headers?: Record<string, string | number | boolean>;
  timeout?: number;
};
/**
 * TResponse is being used in order to properly infer type in useMutation from function returning mutation parameters
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MutationFn<TParams = unknown, TResponse = unknown, TError = unknown> = (
  params: TParams,
) => Mutation<TParams>;
