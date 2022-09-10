import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import sampleSize from 'lodash/sampleSize';

import { StyledButton, StyledHomeWrapper, StyledTitle } from './Home.styles';

import { Layout } from '@/ui/layout/Layout';
import { AppRoutes } from '@/routing/routes';
import { useGetHarryPotterMinifigs } from '@/api/hooks/useGetHarryPotterMinifigs/useGetHarryPotterMinifigs';
export const Home = () => {
  const { isLoading, refetch } = useGetHarryPotterMinifigs({ enabled: false });
  const navigate = useNavigate();

  const handleCTAClick = useCallback(async () => {
    const res = await refetch();
    const data = res.data?.results;

    if (data && data.length >= 3) {
      const randomElems = sampleSize(data, 3);
      console.log(randomElems);
      navigate(AppRoutes.Catalog, { state: { minifigs: randomElems } });
    }
  }, [navigate, refetch]);

  return (
    <Layout>
      <StyledHomeWrapper>
        <StyledTitle>Lego minifigs mystery box</StyledTitle>
        <StyledButton radius={'xl'} uppercase loading={isLoading} disabled={isLoading} onClick={handleCTAClick}>
          Let's go!
        </StyledButton>
      </StyledHomeWrapper>
    </Layout>
  );
};
