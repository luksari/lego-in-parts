import { Minifig } from '@/api/actions/minifigs/minifigs.types';

export type MinifigCardProps = {
  minifig: Minifig;
  isSelected: boolean;
  onClick: (minifig: Minifig) => void;
};
