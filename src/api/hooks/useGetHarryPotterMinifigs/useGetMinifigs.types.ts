import { getHarryPotterMinifigsQueryKey } from '@/api/actions/minifigs/minifigs';
import { useQuery } from '@/hooks/useQuery/useQuery';
import { GetMinifigsResponse } from '@/api/actions/minifigs/minifigs.types';

export const useGetMinifigs = () => useQuery<GetMinifigsResponse>(getHarryPotterMinifigsQueryKey);
