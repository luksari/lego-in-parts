import { Minifig, MinifigPart } from '@/api/actions/minifigs/minifigs.types';

export type MinifigDetailsProps = {
  minifig: Minifig;
  parts?: MinifigPart[];
};
