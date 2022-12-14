import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoutes } from './routes';

import { Home } from '@/app/home/Home';
import { Catalog } from '@/app/catalog/Catalog';
import { Summary } from '@/app/summary/Summary';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home.path} element={<Home />} />
        <Route path={AppRoutes.Catalog.path} element={<Catalog />} />
        <Route path={AppRoutes.Summary.path} element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
};
