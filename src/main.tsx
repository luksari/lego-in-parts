import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { worker } from '@/mocks/browser';
import { App } from '@/app/App';

worker.start();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
