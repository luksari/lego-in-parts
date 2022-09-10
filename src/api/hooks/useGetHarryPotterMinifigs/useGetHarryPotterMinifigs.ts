import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query/types/react/types';

import { getHarryPotterMinifigsQueryKey } from '@/api/actions/minifigs/minifigs';
import { useQuery } from '@/hooks/useQuery/useQuery';
import { GetMinifigsResponse, RebrickableError } from '@/api/actions/minifigs/minifigs.types';

export const useGetHarryPotterMinifigs = (opts?: UseQueryOptions<GetMinifigsResponse, AxiosError<RebrickableError>>) =>
  useQuery<GetMinifigsResponse, AxiosError<RebrickableError>>(getHarryPotterMinifigsQueryKey, opts);
