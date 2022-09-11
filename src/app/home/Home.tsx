import { useLocation, useNavigate } from 'react-router';
import { useCallback } from 'react';
import sampleSize from 'lodash/sampleSize';
import { Button, Title, Transition, Text } from '@mantine/core';

import { Layout } from '@/ui/layout/Layout';
import { AppRoutes } from '@/routing/routes';
import { useGetHarryPotterMinifigs } from '@/api/hooks/useGetHarryPotterMinifigs/useGetHarryPotterMinifigs';
import { useStyles } from '@/app/home/Home.styles';
import { HomeLocationStateFromSummary } from '@/app/home/Home.types';

export const Home = () => {
  const { state } = useLocation();
  const message = (state as HomeLocationStateFromSummary).messageFromSummary;

  const { classes } = useStyles();
  const { isLoading, refetch } = useGetHarryPotterMinifigs({ enabled: false });
  const navigate = useNavigate();

  const handleCTAClick = useCallback(async () => {
    const res = await refetch();
    const data = res.data?.results;

    if (data && data.length >= 3) {
      const randomElems = sampleSize(data, 3);
      navigate(AppRoutes.Catalog.getPath(), { state: { minifigs: randomElems } });
    }
  }, [navigate, refetch]);

  return (
    <Layout>
      <Transition duration={400} timingFunction={'ease'} transition={'fade'} mounted={!!message}>
        {(styles) => (
          <Text style={styles} color={'dimmed'} align={'center'} size={16} mb={48}>
            {message}
          </Text>
        )}
      </Transition>
      <div className={classes.wrapper}>
        <Title order={1} transform={'uppercase'} mb={'xl'} weight={700} color={'white'}>
          Lego minifigs mystery box
        </Title>
        <Button size={'lg'} radius={'xl'} uppercase loading={isLoading} onClick={handleCTAClick} color={'yellow'}>
          Let's go!
        </Button>
      </div>
    </Layout>
  );
};
