export const getMinifigsQueryKey = '/lego/minifigs';
export const getHarryPotterMinifigsQueryKey = `${getMinifigsQueryKey}/?search=harry%20potter`;

export const getMinifigsDetailsQueryKey = (set_num: string) => `/lego/minifigs/${set_num}/parts`;
