import { AxiosError } from 'axios';

import { ShipmentFormData } from '@/app/summary/shipmentForm/ShipmentForm.types';
import { MutationFn } from '@/hooks/useMutation/useMutation.types';

export type Minifig = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: Date;
};

export type ExternalPartId = string[];

export type PartDetails = {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: string;
  external_ids: Record<string, ExternalPartId>;
  print_of: string;
};

export type ExternalColorId = {
  ext_ids: number[];
  ext_descrs: string[][];
};

export type Color = {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
  external_ids: Record<string, ExternalColorId>;
};

export type MinifigPart = {
  id: number;
  inv_part_id: number;
  part: PartDetails;
  color: Color;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
};

export type GetMinifigsPartsResponse = {
  count: number;
  next: number | null;
  previous: number | null;
  results: MinifigPart[];
};

export type GetMinifigsResponse = {
  count: number;
  next: number | null;
  previous: number | null;
  results: Minifig[];
};

export type RebrickableError = { detail: string };

export type SubmitMinifigReqBody = {
  minifig: Minifig;
  shipment: ShipmentFormData;
};

export type SubmitMinifigResponse = {
  message: string;
};

export type SubmitMinifigMutationFn = () => MutationFn<
  SubmitMinifigReqBody,
  SubmitMinifigResponse,
  AxiosError<SubmitMinifigResponse>
>;
