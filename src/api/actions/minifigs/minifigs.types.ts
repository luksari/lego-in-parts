export type Minifig = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: Date;
};

export type ExternalPartId = string[];

export type Part = {
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

export type GetPartsResult = {
  id: number;
  inv_part_id: number;
  part: Part;
  color: Color;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
};
