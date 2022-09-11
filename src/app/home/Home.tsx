import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import sampleSize from 'lodash/sampleSize';
import { Button } from '@mantine/core';

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
        <h1 className={classes.title}>Lego minifigs mystery box</h1>
        <Button className={classes.ctaButton} radius={'xl'} uppercase loading={isLoading} onClick={handleCTAClick}>
          Let's go!
        </Button>
      </div>
    </Layout>
  );
};
