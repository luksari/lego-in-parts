export const AppRoutes = {
  Home: {
    path: '/',
    getPath: () => '/',
  },
  Catalog: {
    path: '/catalog',
    getPath: () => '/catalog',
  },
  Summary: {
    path: '/summary/:set_num',
    getPath: (set_num: string) => `/summary/${set_num}`,
  },
};
