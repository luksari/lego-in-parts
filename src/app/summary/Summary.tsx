import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { Grid, Overlay, SimpleGrid, Title, Transition } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useCallback, useState } from 'react';

import { Layout } from '@/ui/layout/Layout';
import { ShipmentForm } from '@/app/summary/shipmentForm/ShipmentForm';
import { MinifigLocationStateFromCatalog, SummaryURLParam } from '@/app/summary/Summary.types';
import { useGetMinifigParts } from '@/api/hooks/useGetMinifigParts/useGetMinifigParts';
import { MinifigDetails } from '@/app/summary/minifigDetails/MinifigDetails';
import { AppRoutes } from '@/routing/routes';
import { useSubmitMinifig } from '@/api/hooks/useSubmitMinifig/useSubmitMinifig';
import { ShipmentFormData } from '@/app/summary/shipmentForm/ShipmentForm.types';

export const Summary = () => {
  const { set_num } = useParams<SummaryURLParam>();
  const { state } = useLocation();
  const navigate = useNavigate();
  const minifig = (state as MinifigLocationStateFromCatalog).minifig;
  const [isFormValid, setIsFormValid] = useState(false);
  const { data: minifigPartsRes } = useGetMinifigParts(set_num || '', { enabled: !!set_num });
  const { isLoading: isSubmitting, mutate: submitMinifigMutate } = useSubmitMinifig({
    onSuccess: (res) => {
      navigate(AppRoutes.Home.getPath(), { state: { messageFromSummary: res.message } });
    },
  });
  const parts = minifigPartsRes?.results;

  if (!set_num) {
    showNotification({
      title: 'Error',
      message: 'You need to provide correct ID of minifig',
    });
  }
  const handleSummaryClick = useCallback(
    (data: ShipmentFormData) => {
      submitMinifigMutate({
        minifig: minifig,
        shipment: data,
      });
    },
    [minifig, submitMinifigMutate],
  );

  if (!state) {
    return <Navigate to={AppRoutes.Home.getPath()} replace />;
  }

  return (
    <Layout>
      <Grid columns={12} gutter={'lg'}>
        <Grid.Col span={8}>
          <ShipmentForm onSubmit={handleSummaryClick} onValidate={setIsFormValid} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Transition mounted={!!minifigPartsRes} transition={'slide-left'} duration={400} timingFunction={'ease'}>
            {(styles) => (
              <MinifigDetails
                style={styles}
                minifig={minifig}
                parts={parts}
                isSummaryBtnDisabled={!isFormValid}
                isSubmitting={isSubmitting}
              />
            )}
          </Transition>
        </Grid.Col>
      </Grid>
    </Layout>
  );
};
