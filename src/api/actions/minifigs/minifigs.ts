import { SubmitMinifigMutationFn } from '@/api/actions/minifigs/minifigs.types';

export const getMinifigsQueryKey = '/lego/minifigs';
export const getHarryPotterMinifigsQueryKey = `${getMinifigsQueryKey}/?search=harry%20potter`;

export const getMinifigsDetailsQueryKey = (set_num: string) => `/lego/minifigs/${set_num}/parts`;

export const submitMinifigMutationKey = 'submit-minifig';

export const submitMinifigMutationFn: SubmitMinifigMutationFn = () => (body) => {
  return {
    method: 'POST',
    endpoint: submitMinifigMutationKey,
    params: body,
    shouldUseBaseUrl: false,
  };
};
