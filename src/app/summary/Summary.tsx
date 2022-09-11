import { Navigate, useLocation, useParams } from 'react-router';
import { Grid, SimpleGrid, Transition } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

import { Layout } from '@/ui/layout/Layout';
import { ShipmentForm } from '@/app/summary/shipmentForm/ShipmentForm';
import { MinifigLocationStateFromCatalog, SummaryURLParam } from '@/app/summary/Summary.types';
import { useGetMinifigParts } from '@/api/hooks/useGetMinifigParts/useGetMinifigParts';
import { MinifigDetails } from '@/app/summary/minifigDetails/MinifigDetails';
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
      <Grid columns={12} gutter={'lg'}>
        <Grid.Col span={8}>
          <ShipmentForm />
        </Grid.Col>
        <Grid.Col span={4}>
          <Transition mounted={!!data} transition={'slide-left'} duration={400} timingFunction={'ease'}>
            {(styles) => <MinifigDetails style={styles} minifig={minifig} parts={parts} />}
          </Transition>
        </Grid.Col>
      </Grid>
    </Layout>
  );
};
