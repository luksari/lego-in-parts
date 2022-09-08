import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};
