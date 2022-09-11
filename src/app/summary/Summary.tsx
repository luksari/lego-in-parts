import { Navigate, useLocation, useParams } from 'react-router';
import { SimpleGrid } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

import { Layout } from '@/ui/layout/Layout';
import { ShipmentForm } from '@/app/summary/shipmentForm/ShipmentForm';
import { MinifigLocationStateFromCatalog, SummaryURLParam } from '@/app/summary/Summary.types';
import { useGetMinifigParts } from '@/api/hooks/useGetMinifigParts/useGetMinifigParts';
import { MinifigDetails } from '@/app/summary/minifigDetails/MinifigDetails';
import { MinifigsLocationStateFromHome } from '@/app/catalog/Catalog.types';
import { AppRoutes } from '@/routing/routes';

export const Summary = () => {
  const { set_num } = useParams<SummaryURLParam>();
  const { state } = useLocation();
  const minifig = (state as MinifigLocationStateFromCatalog).minifig;

  if (!set_num) {
    showNotification({
      title: 'Error',
      message: 'You need to provide correct ID of minifig',
    });
  }
  const { data, isLoading } = useGetMinifigParts(set_num || '', { enabled: !!set_num });

  const parts = data?.results.map((result) => result);

  if (!state) {
    return <Navigate to={AppRoutes.Home.getPath()} replace />;
  }

  return (
    <Layout>
      <SimpleGrid cols={2} spacing={'xl'}>
        <ShipmentForm />
        <MinifigDetails minifig={minifig} parts={parts} />
      </SimpleGrid>
    </Layout>
  );
};
