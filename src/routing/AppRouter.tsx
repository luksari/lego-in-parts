import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoutes } from './routes';

import { Home } from '@/app/home/Home';
import { Catalog } from '@/app/catalog/Catalog';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Home />} />
        <Route path={AppRoutes.Catalog} element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};
