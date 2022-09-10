import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

import { ApiClientContextController } from '@/context/apiClient/ApiClientContextController';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ApiClientContextController>{children}</ApiClientContextController>
    </MantineProvider>
  );
};
