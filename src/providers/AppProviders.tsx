import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';
import { NotificationsProvider } from '@mantine/notifications';

import { ApiClientContextController } from '@/context/apiClient/ApiClientContextController';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <ApiClientContextController>{children}</ApiClientContextController>
      </NotificationsProvider>
    </MantineProvider>
  );
};
