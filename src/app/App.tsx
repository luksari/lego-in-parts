import { ReactQueryDevtools } from 'react-query/devtools';

import { AppProviders } from '@/providers/AppProviders';
import { AppRouter } from '@/routing/AppRouter';

export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </AppProviders>
  );
};
