import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoutes } from './routes';

import { Home } from '@/app/home/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
