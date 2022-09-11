export type Mutation<TParams> = {
  endpoint: string;
  params: TParams;
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string | number | boolean>;
  timeout?: number;
  shouldUseBaseUrl?: boolean;
};
/**
 * TResponse is being used in order to properly infer type in useMutation from function returning mutation parameters
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MutationFn<TParams = unknown, TResponse = unknown, TError = unknown> = (
  params: TParams,
) => Mutation<TParams>;
