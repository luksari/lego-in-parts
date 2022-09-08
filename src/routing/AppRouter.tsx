import { Route, Routes } from 'react-router';

import { Home } from '../app/home/Home';

import { AppRoutes } from './routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Home />} />
    </Routes>
  );
};
