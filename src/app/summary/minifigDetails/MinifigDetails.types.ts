import { CSSProperties } from 'react';

import { Minifig, MinifigPart } from '@/api/actions/minifigs/minifigs.types';

export type MinifigDetailsProps = {
  minifig: Minifig;
  parts?: MinifigPart[];
  style: CSSProperties;
  isSummaryBtnDisabled: boolean;
  isSubmitting: boolean;
};
