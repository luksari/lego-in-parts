import { Navigate, useLocation, useNavigate } from 'react-router';
import { Center, SimpleGrid, Button } from '@mantine/core';
import { useState } from 'react';

import { Layout } from '@/ui/layout/Layout';
import { AppRoutes } from '@/routing/routes';
import { MinifigsLocationStateFromHome } from '@/app/catalog/Catalog.types';
import { MinifigCard } from '@/ui/minifigCard/MinifigCard';
import { Minifig } from '@/api/actions/minifigs/minifigs.types';

export const Catalog = () => {
  const { state } = useLocation();
  const minifigs = (state as MinifigsLocationStateFromHome).minifigs;
  const navigate = useNavigate();
  const [chosenMinifig, setChosenMinifig] = useState<Minifig | null>(null);

  const handleProceedToSummary = () => {
    if (!chosenMinifig) {
      return;
    }
    navigate(AppRoutes.Summary.getPath(chosenMinifig.set_num));
  };

  if (!state) {
    return <Navigate to={AppRoutes.Home.getPath()} replace />;
  }

  return (
    <Layout>
      <SimpleGrid cols={3} spacing={'xl'}>
        {minifigs.map((minifig) => (
          <MinifigCard
            minifig={minifig}
            isSelected={chosenMinifig?.set_num === minifig.set_num}
            key={minifig.set_num}
            onClick={setChosenMinifig}
          />
        ))}
      </SimpleGrid>
      <Center mt={45}>
        <Button radius={'lg'} uppercase disabled={!chosenMinifig} onClick={handleProceedToSummary}>
          Proceed to shipment
        </Button>
      </Center>
    </Layout>
  );
};
