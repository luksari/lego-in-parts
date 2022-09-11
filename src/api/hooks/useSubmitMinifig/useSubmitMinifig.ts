import { AxiosError } from 'axios';
import { UseMutationOptions } from 'react-query';

import { SubmitMinifigReqBody, SubmitMinifigResponse } from '@/api/actions/minifigs/minifigs.types';
import { submitMinifigMutationFn, submitMinifigMutationKey } from '@/api/actions/minifigs/minifigs';
import { useMutation } from '@/hooks/useMutation/useMutation';

export const useSubmitMinifig = (
  options?: UseMutationOptions<SubmitMinifigResponse, AxiosError<SubmitMinifigResponse>, SubmitMinifigReqBody>,
) => useMutation(submitMinifigMutationKey, submitMinifigMutationFn(), options);
