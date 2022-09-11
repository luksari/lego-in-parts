import { Minifig } from '@/api/actions/minifigs/minifigs.types';

export type SummaryURLParam = {
  set_num: Minifig['set_num'];
};

export type MinifigLocationStateFromCatalog = {
  minifig: Minifig;
};
