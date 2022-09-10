import { useNavigate } from 'react-router';

import { StyledButton, StyledHomeWrapper, StyledTitle } from './Home.styles';

import { Layout } from '@/ui/layout/Layout';
import { AppRoutes } from '@/routing/routes';
import { useQuery } from '@/hooks/useQuery/useQuery';

export const Home = () => {
  const x = useQuery;
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate(AppRoutes.Catalog);
  };

  return (
    <Layout>
      <StyledHomeWrapper>
        <StyledTitle>Lego minifigs mystery box</StyledTitle>
        <StyledButton onClick={handleCTAClick}>Let's go!</StyledButton>
      </StyledHomeWrapper>
    </Layout>
  );
};
