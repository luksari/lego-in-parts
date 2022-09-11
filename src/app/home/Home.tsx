import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import sampleSize from 'lodash/sampleSize';
import { Button, Title } from '@mantine/core';

import { Layout } from '@/ui/layout/Layout';
import { AppRoutes } from '@/routing/routes';
import { useGetHarryPotterMinifigs } from '@/api/hooks/useGetHarryPotterMinifigs/useGetHarryPotterMinifigs';
import { useStyles } from '@/app/home/Home.styles';
export const Home = () => {
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
