import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query/types/react/types';

import { getMinifigsDetailsQueryKey } from '@/api/actions/minifigs/minifigs';
import { useQuery } from '@/hooks/useQuery/useQuery';
import { GetMinifigsPartsResponse, RebrickableError } from '@/api/actions/minifigs/minifigs.types';

export const useGetMinifigParts = (
  set_num: string,
  opts?: UseQueryOptions<GetMinifigsPartsResponse, AxiosError<RebrickableError>>,
) => useQuery<GetMinifigsPartsResponse, AxiosError<RebrickableError>>(getMinifigsDetailsQueryKey(set_num), opts);
