import { useLocation } from 'react-router';
import { Center, SimpleGrid, Button } from '@mantine/core';

import { Layout } from '@/ui/layout/Layout';

export const Summary = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Layout>
      <SimpleGrid cols={2} spacing={'xl'}></SimpleGrid>
    </Layout>
  );
};
