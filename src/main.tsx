import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import './index.css';
import { AppProvider } from './providers/AppProviders';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
